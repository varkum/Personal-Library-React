import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AddBook from './add-book.component';
import BookInfo from './book-info.component';

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    } 
  }
  //get books on load
  
  componentDidMount() {
    
    axios.get(`${this.props.config.backend}/api/books`, {
      headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      'Authorization': localStorage.getItem("jwt")
      }
    })
          .then((res) => {
            this.setState({
              books: res.data
            })
            
            })
          .catch((err) => {
            console.log(err);
          });
    
  }
  
  render() {
    let rawBooks = this.state.books;
    let bookBlocks = rawBooks.map((el) => {
      return <BookInfo book={el} key={el["title"]} />
    });
    return (
      <div className="container-fluid books">
        <AddBook />
        <div className="mt-4">
          <div className="row">
            <div className="col-md">
              <h4>Title</h4>
            </div>
            <div className="col-md">
              <h4>Author</h4>
            </div>
            <div className="col-md">
              <h4>Rating</h4>
            </div>
            <div className="col-md">
              <h4>Tags</h4>
            </div>
          </div>

        {bookBlocks}
        </div>
      </div>
    )
  }
}