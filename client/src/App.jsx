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

    //Set the state to be the selected artwork based on input name
    let newTitle = random[0].title;
    let newArtist = random[0].artist;
    let newPicture = random[0].picture;
    let newDate = random[0].date;
    let newMedium = random[0].medium;
    let newRec = "Recommendation for: " + random[0]["recommended for"]
    setTitle(newTitle);
    setArtist(newArtist);
    setPicture(newPicture);
    setDate(newDate);
    setMedium(newMedium);
    setRec(newRec);
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