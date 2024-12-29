import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Description from "./components/Description";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  //tableau de movies que je veux afficher
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Avatar",
      description:
        "Un marine paraplégique est envoyé sur la planète Pandora où il découvre une nouvelle civilisation.",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_ddf1a53b.jpeg?region=0%2C0%2C540%2C810",
      note: 9.5,
      trailer: "https://www.youtube.com/watch?v=DX2OGbLFmWI",
    },
    {
      id: 2,
      title: "La Casa De Papel",
      description:
        "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
      posterUrl:
        "https://www.moka-mag.com/media/cache/article_text_picture_block/2020/04/5942-5808877.jpg-r-1920-1080-f-jpg-q-x-xxyxx.jpg",
      note: 10,
      trailer: "https://www.youtube.com/watch?v=0ULjL4cbSro",
    },
    {
      id: 3,
      title: "Prison Break",
      description:
        "Son frère injustement accusé de meurtre, un ingénieur en génie civil décide de le faire évader du fameux pénitencier de Fox River.",
      posterUrl:
        "https://play-lh.googleusercontent.com/xylVoXWYKn6VbArHhJ_UPy-zN9dB-GISA3Ieq2Gt8gJ5dYLeDexCQ-ZGdKdJAcfFVGif4iTvAxdPtXM9DoQ",
      note: 8.5,
      trailer: "https://www.youtube.com/watch?v=AL9zLctDJaU",
    },
    {
      id: 4,
      title: "Titanic",
      description:
        "Une histoire d'amour épique entre un artiste pauvre et une jeune femme de la haute société à bord du RMS Titanic.",
      posterUrl:
        "https://www.jamescameron.fr/images/filmo/Titanic-James-Cameron.jpg",
      note: 8.5,
      trailer: "https://www.youtube.com/watch?v=Quf4qIkD3KY",
    },
    {
      id: 5,
      title: "Gladitor",
      description:
        "Un général romain trahi cherche à se venger de l'empereur corrompu qui a tué sa famille.",
      posterUrl:
        "https://www.lafilmotheque.fr/v3/content/uploads/2023/11/51GA6V6VE1L._AC_UF10001000_QL80_-1-480x640.jpg",
      note: 6,
      trailer: "https://www.youtube.com/watch?v=P5ieIbInFpg",
    },
    {
      id: 6,
      title: "Forrest Gump",
      description:
        "L'histoire d'un homme simple d'esprit aux capacités extraordinaires qui traverse des décennies de l'histoire américaine.",
      posterUrl:
        "https://i-viaplay-com.akamaized.net/viaplay-prod/546/568/1554986669-b5460d8b0a3ceea4a578b0c310860c7a160aff86.jpg?width=400&height=600",
      note: 7.5,
      trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    },
  ]);
  const [filterByTitle, setFilterByTitle] = useState("");
  const [filterByNote, setFilterByNote] = useState("");
  const [showModal, setShowModal] = useState(false);

  //fonction add movie qui permet d'ajouter un film avec un id de date now
  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  };

  //fonction filtered movie qui permet de filtrer un film avec son titre et sa note
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterByTitle.toLowerCase()) &&
      movie.note >= filterByNote
  );

  // Bootstrap modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    //Lafiichage
    <Router>
      <div className="App">
        <h1>Application de cinéma</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  filterByTitle={filterByTitle}
                  setFilterNote={filterByNote}
                  setFilterByTitle={setFilterByTitle}
                  setFilterByNote={setFilterByNote}
                />
                <MovieList movies={filteredMovies} />
                <Button
                  className="add-movie-button"
                  variant="primary"
                  onClick={handleShowModal}
                >
                  {" "}
                  Add Movie{" "}
                </Button>
                <AddMovie
                  show={showModal}
                  handleClose={handleCloseModal}
                  addMovie={addMovie}
                />
              </>
            }
          />
          <Route path="/movie/:id" element={<Description movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
