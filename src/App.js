import { useState } from "react";
import "./App.css";

const dictionaryData = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [inputWord, setInputWord] = useState("");
  const [searchedWord, setSearchedWord] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(inputWord);
    const filteredWord = dictionaryData.filter((meaning) =>
      meaning.word.toLowerCase().includes(inputWord.toLowerCase())
    );
    setErrorMessage(
      (filteredWord.length === 0 || inputWord==="") ? "Word not found in the dictionary." : ""
    );
    setSearchedWord(filteredWord);
  };
  return (
    <div className="Container">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSearch}>
        <input
          placeholder="Search for a word..."
          type="text"
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h2>Definition:</h2>
      {errorMessage && <p>{errorMessage}</p>}
      {inputWord && searchedWord.map((mean) => <p>{mean.meaning}</p>)}
    </div>
  );
}

export default App;
