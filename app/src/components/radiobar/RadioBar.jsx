import axios from "axios";
import React, { useState } from "react";
import Result from "../result/Result";

const RadioBar = () => {
  const API_URL =
    "https://api.openai.com/v1/engines/text-davinci-003/completions";
  const API_KEY = "YOUR_API_KEY";

  const [favoriteLanguage, setfavoriteLanguage] = useState("C#");
  const [result, setResult] = useState("");

  function onOptionChange(e) {
    setfavoriteLanguage(e.target.value);
  }

  const data = JSON.stringify({
    prompt: `Tell me a funny joke about ${favoriteLanguage}.`,
    max_tokens: 100,
    temperature: 0.5,
  });

  function callChatGptAPI() {
    axios
      .post(API_URL, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((res) => {
        setResult(res.data.choices[0].text);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <fieldset className="mt-lg-5">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="csharp"
            value="C#"
            checked={favoriteLanguage === "C#"}
            onChange={onOptionChange}
          />
          <label className="form-check-label" htmlFor="csharp">
            C#
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="java"
            value="Java"
            checked={favoriteLanguage === "Java"}
            onChange={onOptionChange}
          />
          <label className="form-check-label" htmlFor="java">
            Java
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="python"
            value="Python"
            checked={favoriteLanguage === "Python"}
            onChange={onOptionChange}
          />
          <label className="form-check-label" htmlFor="python">
            Python
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="javascript"
            value="JavaScript"
            checked={favoriteLanguage === "JavaScript"}
            onChange={onOptionChange}
          />
          <label className="form-check-label" htmlFor="javascript">
            JavaScript
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="rust"
            value="Rust"
            checked={favoriteLanguage === "Rust"}
            onChange={onOptionChange}
          />
          <label className="form-check-label" htmlFor="rust">
            Rust
          </label>
        </div>
      </fieldset>
      <button
        className="mt-lg-5 btn btn-success"
        id="btnGenerate"
        onClick={callChatGptAPI}
      >
        Generate a Random Joke
      </button>
      <Result joke={result} />
    </div>
  );
};

export default RadioBar;
