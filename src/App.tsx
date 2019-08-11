import React from "react";
import { Row, Col } from "reactstrap";

import AboutPage from './pages/about';
import Footer from "./components/Footer";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Row className="no-gutters">
          <Col>
          <Header />
          </Col>
        </Row>
        <Row className="no-gutters align-items-center">
          <Col>
          <AboutPage />
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col>
            <Footer />
          </Col>
        </Row>
    </div>
  );
};

export default App;
