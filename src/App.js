/* eslint-disable react/prefer-stateless-function */
/* eslint-disable */
import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import Calculator from "./components/Calculator";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main id="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/Quote" element={<Quotes />} />
            </Routes>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
