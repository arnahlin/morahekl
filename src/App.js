import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Info from "./components/Info";

import Bears from "./components/productPages/Bears";
import Bunnies from "./components/productPages/Bunnies";
import Keychains from "./components/productPages/Keychains";

function App() {

  return (
    <div className="app-container">
      <Router>
        <div className="app-header">
          <Header />
        </div>
        <div className="app-routes">
          <Route exact path="/" component={Home} />
          <Route exact path="/Um" component={About} />
          <Route exact path="/Hafasamband" component={Contact} />
          <Route exact path="/Upplysingar" component={Info} />

          <Route exact path="/Bangsar" component={Bears} />
          <Route exact path="/Kanínur" component={Bunnies} />
          <Route exact path="/Lyklakippur" component={Keychains} />
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
