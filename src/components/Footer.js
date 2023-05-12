import { Container, Row, Col } from 'react-bootstrap';
import ReactDOM from 'react-dom';


export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <p> &copy; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};