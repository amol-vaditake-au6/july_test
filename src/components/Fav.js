import React, { Component } from "react";
import { connect } from "react-redux";
import FavItems from "./FavItems";

class Fav extends Component {
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
          <FavItems key={image.id} image={image} />
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

export default connect(mapStateToProps)(Fav);
