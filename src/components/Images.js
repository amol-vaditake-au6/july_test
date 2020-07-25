import React, { Component } from "react";
import { connect } from "react-redux";
import ImageItem from "./ImageItem";

class Images extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          direction: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {this.props.images.map((image) => (
          <ImageItem key={image.id} image={image} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps)(Images);
