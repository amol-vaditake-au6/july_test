import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setImages } from "../redux/actions/imageActions";
import Axios from "axios";
import Images from "../components/Images";
class MyImages extends Component {
  async componentDidMount() {
    const data = await Axios.post(
      "https://young-peak-88511.herokuapp.com/userImages",
      {
        userId: this.props.user.id,
      }
    );
    this.props.setImages(data.data);
  }

  render() {
    if (!this.props.user) return <Redirect to="/login" />;
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

export default connect(mapStateToProps, { setImages })(MyImages);
