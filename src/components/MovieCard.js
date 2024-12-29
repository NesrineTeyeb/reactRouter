import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props) {
  //destruction of the props pour permettre d'accéder les props du movies dans app.js
  const { title, description, posterUrl, note, id } = props.movie;
  //Afiichage du composant movie card:
  return (
    <div className="movie-card">
      <img className="movie-poster" src={posterUrl} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <h6>Rating: {note}/10</h6>
      <Link to={`/movie/${id}`} className="movie-link">
        {" "}
        More Details
      </Link>
    </div>
  );
}

export default MovieCard;
