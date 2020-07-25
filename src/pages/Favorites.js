import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setFav } from "../redux/actions/imageActions";
import Axios from "axios";
import Fav from "../components/Fav";
class FavPage extends Component {
  async componentDidMount() {
    const data = await Axios.post(`http://localhost:1234/getUserFavorites`, {
      userId: this.props.user.id,
    });
    console.log(data);
    this.props.setFav(data.data);
  }

  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    return this.props.images ? (
      <Fav images={this.props.images} />
    ) : (
      <h1>Loading</h1>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
    images: storeState.imageState.favorites,
  };
};

export default connect(mapStateToProps, { setFav })(FavPage);
