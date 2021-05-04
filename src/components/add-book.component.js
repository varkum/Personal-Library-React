import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import BookForm from './book-form.component';
import config from "../config";

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Authorization": localStorage.getItem("jwt")
  }
};

export default class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleOpenModal() {
    this.setState({
      showForm: true
    })
  }

  handleCloseModal() {
    this.setState({
      showForm: false
    });
  }

  handleDelete() {
    axios.delete(`${config.backend}/api/books`, axiosConfig)
          .then((res) => console.log(res.data));
    window.location = '/books';
  }
  render() {
    return (
      <div>
        <div className="row mt-3">
        <button className="btn btn-info mr-3 ml-2" onClick={this.handleOpenModal}>Add Book</button>
        <button className="btn btn-danger" onClick={this.handleDelete}>Delete All</button>
        </div>
        <Modal 
        show={this.state.showForm} onHide={this.handleCloseModal} size="lg" aria-labelledby="add-book"centered>
        <Modal.Header closeButton>
          <Modal.Title id="add-book">Add New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookForm />
        </Modal.Body>
        </Modal>
      </div>
    )
  }
}