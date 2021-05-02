import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Authorization": localStorage.getItem("jwt")
  }
};
export default class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      rating: 0,
      tags: '',
      comments: ''
    }

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onChangeTitle(event) {
    this.setState({
      title: event.target.value
    })
  }

  onChangeAuthor(event) {
    this.setState({
      author: event.target.value
    })
  }

  onChangeRating(event) {
    this.setState({
      rating: event.target.value
    })
  }

  onChangeTags(event) {
    this.setState({
      tags: event.target.value
    })
  }

  onChangeComments(event) {
    this.setState({
      comments: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      rating: this.state.rating,
      tags: this.state.tags,
      comments: this.state.comments
    }

    console.log(book);
    axios.post('https://personal-library-backend.varkum.repl.co/api/books', book, axiosConfig)
          .then((res) => console.log(res.data));

    window.location = '/books';
  }

  handleClose(event) {
    window.location = '/books';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row mr-auto ml-auto">
            <div className="form-group col-md-7">
              <label for="inputTitle">Title</label>
              <input type="text" required className="form-control" id="inputTitle" placeholder="Title" value={this.state.title} onChange={this.onChangeTitle}/>
            </div>
            <div className="form-group col-md-4">
              <label for="inputAuthor">Author</label>
              <input type="text" required className="form-control" id="inputAuthor" placeholder="Author" value={this.state.author} onChange={this.onChangeAuthor} />
            </div>
            <div className="form-group col-md-1">
              <label for="inputRating">Rating/10</label>
              <input type="number" required className="form-control" id="inputRating" value={this.state.rating} onChange={this.onChangeRating} /> 
            </div>
          </div>
          <div className="form-group">
            <label for="inputTags">Tags & Categories</label>
            <input type="text" className="form-control" id="inputTags" placeholder="Tags" value={this.state.tags} onChange={this.onChangeTags}/>
          </div>
          <div className="form-group">
          <label for="comments">Comments</label>
          <textarea id="comments" placeholder="Comments..." value={this.state.comments} onChange={this.onChangeComments}/>
          </div>
            
          <div className="row">  
            <button type="submit" className="btn btn-primary mr-3 ml-3">Add book</button>
          </div>
          
        </form>
      </div>
    )
  }
}