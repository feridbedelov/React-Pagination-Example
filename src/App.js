import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import About from "./components/About";
import SinglePostView from "./components/SinglePostView";
import Header from "./components/Header";
import "./App.css";


const App = (props) => {
  return (
    <>
      <Header />
      <Switch>
        <div className = "ui container">
          <Route path='/about' component={About} />
          <Route path='/post/:id' component={SinglePostView} />
          <Route exact path='/' component={MainPage} />
        </div>
      </Switch>
    </>
  );
};

export default App;
