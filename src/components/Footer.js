import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/gayathri-rasangika-51a815204/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Gayathri9877"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/rasangikahw?igshid=MzMyNGUyNmU2YQ=="><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.upwork.com/freelancers/~018298cab1bba71fd5"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
