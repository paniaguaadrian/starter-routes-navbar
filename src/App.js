import React from "react";
import { Route } from "react-router-dom";

// * Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// * Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Me from "./pages/Me";

// * Stylesheets

function App() {
  return (
    <div className="container">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/me" component={Me} />
      <Footer />
    </div>
  );
}

export default App;
