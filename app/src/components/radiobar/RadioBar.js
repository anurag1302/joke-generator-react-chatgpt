import axios from "axios";
import React, { useState } from "react";
import Result from "../result/Result";
import LoadingSpinner from "../loadingspinner/LoadingSpinner";
import Error from "../error/Error";

const RadioBar = () => {
  const API_URL =
    "https://api.openai.com/v1/engines/text-davinci-003/completions";
  const API_KEY = "YOUR_API_KEY";

  const [favoriteLanguage, setFavoriteLanguage] = useState("C#");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onOptionChange = (e) => {
    setFavoriteLanguage(e.target.value);
  };

  const data = JSON.stringify({
    prompt: `Tell me a funny joke about ${favoriteLanguage}.`,
    max_tokens: 100,
    temperature: 0.5,
  });

  const callChatGptAPI = () => {
    setIsLoading(true);
    axios
      .post(API_URL, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((response) => {
        setIsLoading(false);
        setResult(response.data.choices[0].text);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(
          "Something went wrong. Please refresh and try again!!!"
        );
      });
  };
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
        onClick={callChatGptAPI}
        disabled={isLoading}
      >
        Generate a Random Joke
      </button>
      {isLoading ? <LoadingSpinner /> : <Result joke={result} />}
      {errorMessage && <Error errorMessage={errorMessage} />}
    </div>
  );
};

export default RadioBar;
