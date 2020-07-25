import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../redux/actions/userActions";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await Axios.post(`http://localhost:1234/login`, {
        email: this.state.email,
        password: this.state.password,
      });
      this.props.setUser(data.data);
      window.location = "/";
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
          <button type="submit"> Login </button>
          <br />
          <Link to={"/register"}>
            <b>
              <em>Register</em>
            </b>
          </Link>
        </form>
      </>
    );
  }
}

export default connect(null, { setUser })(Login);
