import React from "react";
import { Row } from "reactstrap";

import { AboutPage } from "./pages/about";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className="App">
      <Row className="no-gutters m-0">
        <Header />
      </Row>
      <Row className="no-gutters align-items-center p-3 m-0">
        <AboutPage />
      </Row>
      <Row className="no-gutters m-0">
        <Footer />
      </Row>
    </div>
  );
};
