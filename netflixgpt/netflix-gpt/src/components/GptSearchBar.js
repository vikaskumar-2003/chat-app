import React, { useRef } from "react";
import lang from "../utils/languageConstant";

import { useDispatch, useSelector } from "react-redux";
import gemini from "../utils/gemini";
import { API_OPTION } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
   const dispatch=useDispatch()
     
  const searchMovie = async (movie) => {
   const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTION)
    const json = await data.json()
    return json.results
   }

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;
    if (!query) return;
    console.log(searchText.current.value);
    //make an call to api
    try {
      // const response = await gemini.models.generateContent({
      //         model: "gemini-2.5-flash",
      //         contents: {searchText.current.value},
      // });
      // console.log(response.text);

      // const result = await gemini.generateContent(query);
      // const response = await result.response;
      // const text = response.text();
      // console.log(text);

      // const model = gemini.getGenerativeModel({
      //  model: "gemini-1.5-flash", // safer for free tier
      // });
      //    const result = await model.generateContent(query);
      //   const text = result.response.text();
      //  console.log(text);

      const result = await gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          {
            role: "user",
            parts: [{ text: `Act as a movie Recommendation system and suggest some movies for the query: ${query} . only give me of 5 movies, comma separated like the example result given ahead. Example Result:Gadar,Don,Monkey man,Krish,Super man ` }],
          },
        ],
      });

      console.log(result.text.split(","));
      const gptMovies=result.text.split(",")
        
      const dataPromise=  gptMovies.map(movies=>searchMovie(movies))
      const tmdbResult= await Promise.all(dataPromise)
       console.log(tmdbResult);
       
      dispatch(addGptMovieResult({movieName:gptMovies,movieResult: tmdbResult }))
      
      
    } catch (error) {
      console.error("Gemini API Error:", error);
    }
  };

  return (
    <div className="pt-[15%] flex justify-center ">
      <form
        className=" w-1/2 grid grid-cols-12 bg-black"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-2 col-span-9"
          ref={searchText}
        />
        <button
          className="py-2 px-4 m-2 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
