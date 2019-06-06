import React from "react";
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import HomePage from './pages/home';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route name="home" exact path="/" component={HomePage} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
