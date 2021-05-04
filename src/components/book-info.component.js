import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import config from "../config";

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Authorization": localStorage.getItem("jwt")
  }
};

export default class BookInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      editComments: false,
      comments: this.props.book['comments']
    }
    this.handleOpenInfo = this.handleOpenInfo.bind(this);
    this.handleCloseInfo = this.handleCloseInfo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleComments = this.handleComments.bind(this);
  }
  handleOpenInfo() {
    this.setState({
      showInfo: true
    })
  }

  handleCloseInfo() {
    this.setState({
      showInfo: false
    })
  }

  handleDelete() {
    
    axios.delete(`${config.backend}/api/books/`+this.props.book['title'], axiosConfig)
      .then((res) => console.log(res.data));

    window.location = '/books';
  }

  handleEdit() {
    this.setState({
      editComments: !this.state.editComments
    })


    if(this.state.editComments) {
      axios.post(`${config.backend}/api/books/`+this.props.book['title']+'/edit', {
        comments: this.state.comments
      }, axiosConfig)
          .then((res) => console.log(res))
    }
  }

  handleComments(event) {
    this.setState({
      comments: event.target.value
    })
  }
  render() {
    const commentBox = 
      <div>
        {this.state.comments}
      </div>;
    
    const editBox = 
      <div>
        <textarea value={this.state.comments} onChange={this.handleComments}/>
      </div>

    return (
      <div>
      <button className="btn btn-block text-left" onClick={this.handleOpenInfo}>
        <div className="row mt-4">
          <div className="col-md">
            {this.props.book['title']}
          </div>
          <div className="col-md">
            {this.props.book['author']}
          </div>
          <div className="col-md">
            {this.props.book['rating']}
          </div>
          <div className="col-md">
            {this.props.book['tags']}
          </div>
        </div>
        </button>
        <Modal show={this.state.showInfo} onHide={this.handleCloseInfo} size="lg" aria-labelledby="book-info" centered>
          <Modal.Header closeButton>
            <Modal.Title id="book-info">{this.props.book['title']}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md">
                <p><b>Author: </b> {this.props.book['author']}</p>
              </div>
              <div className="col-md">
                <p><b>Tags: </b> {this.props.book['tags']}</p>
              </div>
            </div>
            <div>
              <p><b>Rating: </b> {this.props.book['rating']}</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div><p><b>Comments:</b></p></div>
              <div>
                <button className="btn btn-light mr-4" onClick={this.handleEdit}>
                  {
                    this.state.editComments
                    ? "Done"
                    : "Edit"
                  }
                </button>
              </div>
            </div>
            {
              this.state.editComments 
              ? editBox
              : commentBox
            }
            <button className="btn btn-danger mt-3" onClick={this.handleDelete}>Delete book</button>
          </Modal.Body>
        </Modal>
        </div>
      
    )
  }
}