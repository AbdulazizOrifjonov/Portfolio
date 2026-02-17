import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my.png";
import Tilt from "react-parallax-tilt";
import { useLanguage } from "../../i18n/LanguageContext";

function renderMultiline(text) {
  return String(text)
    .split("\n")
    .map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        <br />
      </React.Fragment>
    ));
}

function Home2() {
  const { t } = useLanguage();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home2.title")}
            </h1>
            <p className="home-about-body">
              {renderMultiline(t("home2.body"))}
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;