import * as React from "react";
import { Container, Row, Col } from "reactstrap";

import TypingAnimation from '../../components/TypingAnimation';
import ProfileImage from "../../resources/Profile.png";

class AboutPage extends React.Component<{}, {}>  {
  render() {
    return (
      <Container>
        <Row>
          <Col className="container-profile">
            <img src={ProfileImage} alt="Logo" className="profileImage" />
          </Col>
          <Col>
            <div className="container-title">
              <span className="container-title title">Alfonso Austin</span>
              <br />
              <TypingAnimation strings={['I am a Software Developer']}/>
            </div>
            <br />
            <br />
            <p className="body">
              Currently working in the finance industry. My interest include building awesome things, 
              learning/tinkering with new technologies and all things space related
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default AboutPage;
