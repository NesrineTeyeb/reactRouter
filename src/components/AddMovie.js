import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddMovie(props) {
//notre state qui contient un nouveau film qu'on peut ajouter
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    note: 0,
  });
//la fonction handle Change appliqué sur les champs des movie pour permettre de modifier la valeur d'input selon la valeur entrée par le clavier
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMovie({ ...newMovie, [name]: value });
  };
//Fonction exécutée aprés le clic sur le add movie et qui permet d'ajouter un film
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterUrl: "", note: 0 });
  };

  return (
    //Affichage notre Modal bootstrap
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={newMovie.title}
              onChange={handleChange}
              placeholder="Enter movie title"
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={newMovie.description}
              onChange={handleChange}
              placeholder="Enter movie description"
            />
          </Form.Group>
          <Form.Group controlId="formPosterUrl">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              type="text"
              name="posterUrl"
              value={newMovie.posterUrl}
              onChange={handleChange}
              placeholder="Enter poster Url"
            />
          </Form.Group>{" "}
          <Form.Group controlId="formNote">
            {" "}
            <Form.Label>Rating</Form.Label>{" "}
            <Form.Control
              type="number"
              name="note"
              value={newMovie.note}
              onChange={handleChange}
              placeholder="Enter note"
              min="0"
              max="10"
              step="0.1"
            />{" "}
          </Form.Group>{" "}
          <Button variant="primary" type="submit" className="modal-add-button">
            {" "}
            Add Movie{" "}
          </Button>{" "}
        </Form>{" "}
      </Modal.Body>{" "}
    </Modal>
  );
}

export default AddMovie;
