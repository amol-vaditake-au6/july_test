import React from "react";
import { connect } from "react-redux";
import Axios from "axios";

const FavItem = ({ image, user }) => {
  const addtoFav = async () => {
    const data = await Axios.post(
      `https://young-peak-88511.herokuapp.com/fav`,
      {
        imageId: image.id,
        userId: user.id,
      }
    );
    console.log(data);
    alert("Added to Favorites Succesfully");
    window.location.reload();
  };
  return (
    <div style={{ border: "2px solid #0dc2f0", margin: 20 }}>
      <img
        src={image.imgURL}
        alt="loading"
        width="200px"
        style={{ margin: 30 }}
        height="200px"
      />
      <p>
        <b style={{ fontSize: "18px" }}>
          <em>Uploade By : {image.userName}</em>
        </b>
      </p>
      {!user ? (
        <></>
      ) : (
        <>
          <button
            style={{
              backgroundColor: "yellow",
              border: "2px solid yellow ",
              borderRadius: 5,
              margin: 5,
            }}
            onClick={addtoFav}
          >
            <b>Remove From Favorites</b>
          </button>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps)(FavItem);
