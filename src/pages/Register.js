import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class componentName extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(`https://young-peak-88511.herokuapp.com/register`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      });
      alert("register Succssfully");
      window.location = "/login";
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <b>
            <em>Name :</em>
          </b>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="name"
            name="name"
          />
          <br />
          <b>
            <em>Email :</em>
          </b>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="email"
            name="email"
          />
          <br />
          <b>
            <em>Password :</em>
          </b>
          <input
            onChange={this.handleChange}
            type="password"
            placeholder="password"
            name="password"
          />
          <br />
          <button type="submit"> Register</button>
          <Link to={"/login"}>Login</Link>
        </form>
      </>
    );
  }
}
