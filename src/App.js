import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import Bears from "./components/ProductPages/Bears";
import Bunnies from "./components/ProductPages/Bunnies";
import Keychains from "./components/ProductPages/Keychains";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/Um" component={About} />
        <Route exact path="/Hafasamband" component={Contact} />

        <Route exact path="/Bangsar" component={Bears} />
        <Route exact path="/Kanínur" component={Bunnies} />
        <Route exact path="/Lyklakippur" component={Keychains} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
