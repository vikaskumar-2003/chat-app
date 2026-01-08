import { GoogleGenAI } from "@google/genai";

const gemini = new GoogleGenAI({
    apiKey: process.env.REACT_APP_GEMINI_KEY,
    dangerouslyAllowBrowser:true
});

export default gemini