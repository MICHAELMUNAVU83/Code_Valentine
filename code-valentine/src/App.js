import React, { useState, useEffect } from "react";
import gify from "./giphy.gif";
function App() {
  const [current, setCurrent] = useState(0);
  const languages = [
    {
      language: "french",
      french: "mia mor",
    },
    {
      language: "english",
      french: "mia mor",
    },
    {
      language: "ajbn",
      french: "mia mor",
    },
    {
      language: "guhnim",
      french: "mia mor",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % languages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center bg-black h-[100vh]">
      {/* <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/3o7TKoWXm3okO1kgHC" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/love-hearts-shurly-3o7TKoWXm3okO1kgHC">via GIPHY</a></p> */}
      <video
        src={gify}
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full h-[100vh] max-w-none"
      ></video>
      <h1 className="text-5xl text-white z-20 absolute top-0 right-[50%] left-[50%] duration-500 transition-all">
       
        {languages[current].language}
      </h1>
    </div>
  );
}

export default App;
