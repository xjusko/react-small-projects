import { useState } from "react";
import memesData from "../memesData.jsx";

function Meme() {
  const [meme, setMeme] = useState({
    url: "",
    topText: "",
    bottomText: "",
  });

  const [allMemeImages, setallMemeImages] = useState(memesData);

  function getMemeImage() {
    const randomMemeUrl =
      allMemeImages.data.memes[
        Math.floor(Math.random() * allMemeImages.data.memes.length)
      ].url;
    setMeme((prev) => ({
      ...prev,
      url: randomMemeUrl,
    }));
  }

  return (
    <section className="input">
      <div className="form">
        <input className="input--field" placeholder="Top text" type="text" />
        <input className="input--field" placeholder="Bottom text" type="text" />
        <button className="input--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        {meme.url && <img className="meme_image" src={meme.url} />}
      </div>
    </section>
  );
}

export default Meme;
