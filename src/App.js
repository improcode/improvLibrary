import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BooksList from "./components/BooksList";
import EditBook from "./components/EditBook";



const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>improv<span className="headerLogo">LIBRARY</span></h1>
      </div>
      <Router>
        <div>
          <Route exact path={"/"} component={BooksList} />
          <Route exact path={"/edit/:id"} component={EditBook} />
        </div>
      </Router>
    </div>
  );
}

export default App;
