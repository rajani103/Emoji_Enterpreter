import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😡": "angry",
  "❤️": "love",
  "😑": "annoyance", //😑
  "😂": "laughter",
  "🤦🏻‍♂️": "facepalm",
  "🥳": "celebrating",
  "☠️": "danger",
  "😎": "feeling cool"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function changeHandler(change) {
    var userInput = change.target.value;
    var meaning = emojiDictionary[userInput];
    //console.log(change.target.value);
    if (meaning === undefined) {
      meaning = "we don't know yet";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> inside out</h1>
      <input onChange={changeHandler}></input>
      <h2>
        {/*meaning*/}
        {""} {meaning}
      </h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}