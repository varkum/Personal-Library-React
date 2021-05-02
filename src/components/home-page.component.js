import React from 'react';
import axios from 'axios';

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      msg: ''
    }
    this.handleRegister = this.handleRegister.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputUsername = this.inputUsername.bind(this);
    this.inputPassword = this.inputPassword.bind(this);
  }
  
  inputUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  inputPassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleRegister(event) {
    event.preventDefault();
    const creds = {
      username: this.state.username,
      password: this.state.password
    };
    if (!creds.username || !creds.password) {
      this.setState({
        msg: "Please enter username and password!"
      })
    } else {
    axios.post('https://Personal-Library-Backend.varkum.repl.co/users/register', creds, axiosConfig)
          .then((res) => {
              localStorage.setItem("jwt", res.data["token"]);
              localStorage.setItem("loggedIn", true)
              this.setState({
                msg: 'Registered!',
              })

              window.location = '/books';
          })
          .catch((err) => {
            this.setState({
              msg: err.response.data.msg
            })
          })

    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const creds = {
      username: this.state.username,
      password: this.state.password
    };
    if (!creds.username || !creds.password) {
      this.setState({
        msg: "Please enter username and password!"
      })
    } else {
    

    axios.post('https://Personal-Library-Backend.varkum.repl.co/users/login', creds, axiosConfig)
        .then((res) => {
          localStorage.setItem('jwt', res.data["token"]);
          localStorage.setItem('loggedIn', true);
          this.setState({
            msg: `Welcome ${res.data.user.username}`
          })
          window.location = '/books';
          
        })
        .catch((err) => {
          this.setState({
            msg: err.response.data.msg
          })
        });

    }
      
  }

  render() {
    return (
      <div className="homePage">
      <div className="loginBox mt-auto">
        <form>
          <div className="form-group">
            <label for="username">Username</label>
            <input id="username" className="form-control" value={this.state.username} onChange={this.inputUsername}/>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" className="form-control" value={this.state.password} onChange={this.inputPassword}/>
          </div>
          </form>
          <div className="row">
            <div>
              <button className="btn btn-primary ml-3" type="submit" onClick={this.handleSubmit}>Log in</button>
            </div>
            <div>
              <button className="btn btn-primary ml-2 mr-4" onClick={this.handleRegister}>Register</button>
            </div>
          </div>
          <p mt-4 className="text-center">{this.state.msg}</p>
      </div>
      </div>
    )
  }
}