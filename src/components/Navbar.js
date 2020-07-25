import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../redux/actions/userActions";

const Navbar = ({ user, logOutUser }) => {
  const handleLogout = () => {
    alert("Logged out successfully");
    logOutUser();
  };
  return (
    <div
      style={{
        display: "flex",
        directon: "column",
        width: "100%",
        height: "50px",
        backgroundColor: "#0dc2f0",
      }}
    >
      <Link to={"/"}>
        <p
          style={{
            fontWeight: "900",
            fontSize: "20px",
            color: "white",
            marginLeft: 50,
          }}
        >
          <em>Home</em>
        </p>
      </Link>
      {!user ? (
        <Link to={"/login"}>
          <p
            style={{
              fontWeight: "900",
              fontSize: "20px",
              color: "white",
              marginLeft: 50,
            }}
          >
            <em>login</em>
          </p>
        </Link>
      ) : (
        <>
          <button
            style={{ backgroundColor: "#0dc2f0", border: "none" }}
            onClick={handleLogout}
          >
            <p
              style={{
                fontWeight: "900",
                fontSize: "20px",
                color: "white",
                marginLeft: 50,
              }}
            >
              <em>Logout</em>
            </p>
          </button>
          <Link to={"/upload"}>
            <p
              style={{
                fontWeight: "900",
                fontSize: "20px",
                color: "white",
                marginLeft: 50,
              }}
            >
              <em>Upload New Images</em>
            </p>
          </Link>
          <Link to={"/fav"}>
            <p
              style={{
                fontWeight: "900",
                fontSize: "20px",
                color: "white",
                marginLeft: 50,
              }}
            >
              <em>Go to Favorites</em>
            </p>
          </Link>
          <Link to={"/myImages"}>
            <p
              style={{
                fontWeight: "900",
                fontSize: "20px",
                color: "white",
                marginLeft: 50,
              }}
            >
              <em>Your Images</em>
            </p>
          </Link>
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
export default connect(mapStateToProps, { logOutUser })(Navbar);
