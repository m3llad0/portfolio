import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css'
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Developer", "Digital Artist", "Programmer", "Student"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(prevLoopNum => prevLoopNum + 1);
        setDelta(500);
      }
    }

    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker)};
  }, [loopNum, isDeleting, text, toRotate, delta])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) => 
              <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                <span className="tagLine">Welcome to my Portfolio!</span>
                <h1>{`Hi, I'm Diego Mellado `}</h1>
                <p> 
                I'm a Computer Science student at Tecnológico de Monterrey, and I'm particularly interested in the fields of Artificial Intelligence and app development. I'm fascinated by the possibilities that AI can bring to various industries and enjoy developing applications that can make a difference in people's lives. My goal is to continue learning and acquiring new skills that will enable me to contribute to these fields and create impactful projects.
                </p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <img src={headerImg} alt="Header Img"/> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}