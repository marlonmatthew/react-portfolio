import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper>
          <Header />
          <Main />
          <Footer />
        </Wrapper>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
