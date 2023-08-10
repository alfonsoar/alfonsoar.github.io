import React from "react";
import { Row } from "reactstrap";

import { AboutPage } from "./pages/about";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Row className="no-gutters">
        <Header />
      </Row>
      <Row className="no-gutters align-items-center p-3">
        <AboutPage />
      </Row>
      <Row className="no-gutters">
        <Footer />
      </Row>
    </div>
  );
};

export default App;
