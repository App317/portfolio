import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>
          <Col md={3}>
            <a
              className="btn"
              href="Front_End_Developer_Resume.pdf"
              download="Anthony_Muniz-Bueno_Resume.pdf"
            >
              Resume PDF Download
            </a>
          </Col>
          <Col md={3}>
            <a
              className="btn "
              href="Front_End_Developer_Resume.docx"
              download="Anthony_Muniz-Bueno_Resume.docx"
            >
              Resume DOCX Download
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
