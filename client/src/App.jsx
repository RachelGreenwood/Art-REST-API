import { useState } from 'react'
import SelectedArt from "./components/selectedArt";
import './App.css'

function App() {
  // Initialize state for each element of an artwork
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [picture, setPicture] = useState("");
  const [date, setDate] = useState("");
  const [medium, setMedium] = useState("");
  const [rec, setRec] = useState("");

  async function fetchData() {
    //Fetch data from API
    const response = await fetch("http://localhost:3000/art");
    const books = await response.json();
    const booksJSON = JSON.stringify(books, null, 2);
    console.log(booksJSON);

    // Get the specific artwork
    let random = books.filter(work => work["recommended for"] == input.value);
  }

  return (
    <>
      <div className="App">
      <h1>Hello Techtonica</h1>
      <h2>Click the button to get a random book!</h2>
        <input id="input" type="text" required></input>
      <div>
        <button onClick={fetchData} type="submit">
          Get an artwork
        </button>
      </div>
      <SelectedArt title={title} artist={artist} date={date} medium={medium} picture={picture} rec={rec} />
    </div>
    </>
  )
}

export default App