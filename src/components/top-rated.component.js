import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import BookInfo from './book-info.component'

export default class TopBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books:[]
    }
  }

  //get top books on load
  componentDidMount() {
    
    axios.get('https://personal-library-backend.varkum.repl.co/api/books/top', {
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