import React from "react";
import { connect } from "react-redux";
import Axios from "axios";

const FileInput = (user) => {
  const [formState, setFormState] = React.useState({
    privacy: "public",
    file: "",
  });
  const [file] = React.useState("");
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fileUpload", formState.file);
    formData.append("privacy", formState.privacy);
    formData.append("id", user.user.id);
    try {
      await Axios.post(
        `https://young-peak-88511.herokuapp.com/upload`,
        formData
      );
      alert("image uploade successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          valur={file}
          name="file"
          onChange={handleChange}
          multiple
          style={{ margin: "auto" }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps)(FileInput);
