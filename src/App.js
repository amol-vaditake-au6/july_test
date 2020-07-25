import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import FavPage from "./pages/Favorites";
import MyImages from "./pages/MyImages";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/fav" component={FavPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/myImages" component={MyImages} />
        <Route exact path="/upload" component={UploadPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
