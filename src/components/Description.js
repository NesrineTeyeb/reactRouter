import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Description(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = props.movies.find((movie) => movie.id === parseInt(id));
  if (!movie) {
    return <h2> Movie not found</h2>;
  }
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.descrption}</p>
      <img className="movie-poster" src={movie.posterUrl} alt={movie.title} />
      <div>
      {" "}
        <button  className="add-movie-button" onClick={() => navigate("/")}>Home page</button>
      </div>
    </div>
    
    /* <Link
        to="/"
        style={{
          marginTop: "20px",
          display: "inline-block",
          textDecoration: "none",
          color: "blue",
        }}
      >
        Back to Home
      </Link> */
  );
}

export default Description;
