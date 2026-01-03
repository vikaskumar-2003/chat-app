import useMovieTrailer from "../hooks/useMoviesTrailer";
import { useSelector } from "react-redux";


const VideosBackGround = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideos);
 console.log(movieId);
 
   useMovieTrailer(movieId)

  console.log("movieId:", movieId);
  console.log("trailerVideo from store:", trailerVideo);

  return (
    <div className="w-screen   " >
      <iframe
        className="w-screen aspect-video h-[110%] -top-[5%] -left-[5%] "
        
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideosBackGround;
