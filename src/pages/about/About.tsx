import * as React from "react";
import { Container, Row, Col } from "reactstrap";

import ProfileImage from "../../resources/Profile.png";

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col className="container-profile">
          <img src={ProfileImage} alt="Logo" className="profileImage" />
        </Col>
        <Col>
          <div className="container-title">
            <span className="container-title title">About Me</span>
          </div>
          <div>
            <p className="body">
              Hello! My name is Alfonso Austin and I am technologist based out
              of NYC. I am currently working as a full stack developer in the
              finance industry. I have experience working with programming
              languages such as: JavaScript, HTML, Python, PHP and Java.
              </p>
            <p className="body">
              My interest include building awesome things, learning/tinkering
              with new technologies and all things space related. If you wish
              to get in contact with me please refer to the contact page.
              </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
