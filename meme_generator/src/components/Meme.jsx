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

  function handleChange(event) {
    setMeme((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          placeholder="Top text"
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          className="form--input"
          placeholder="Bottom text"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      {meme.url && (
        <div className="meme">
          <img className="meme--image" src={meme.url} />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      )}
    </main>
  );
}

export default Meme;
