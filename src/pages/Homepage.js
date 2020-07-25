import React, { Component } from "react";
import { connect } from "react-redux";
import { setImages } from "../redux/actions/imageActions";
import Axios from "axios";
import Images from "../components/Images";
class HomePage extends Component {
  async componentDidMount() {
    const data = await Axios.get("http://localhost:1234/allImages");
    this.props.setImages(data.data);
  }

  render() {
    return this.props.images ? (
      <Images images={this.props.images} />
    ) : (
      <h1>Loading</h1>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
    images: storeState.imageState.images,
  };
};

export default connect(mapStateToProps, { setImages })(HomePage);
