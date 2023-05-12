import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import nodejs from '../assets/img/nodejs-icon.svg';
import python from '../assets/img/python-5.svg';
import csharp from '../assets/img/c--4.svg';
import ts from '../assets/img/typescript-2.svg';
import mysql from '../assets/img/mysql-6.svg';
import mongo from '../assets/img/mongodb-icon-1.svg';
import neo4j from '../assets/img/neo4j.svg';
import react from '../assets/img/react-2.svg';
import flask from '../assets/img/flask.svg';
import django from '../assets/img/django.svg';
import colorSharp from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>My Skills</h2>
              <p> Some technical skills that I have gained through my academic and profesional experiences.</p>
              <h4 style={{
                paddingBottom: "1rem"
              }}>Programming languages</h4>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">

                <img src={nodejs}/>
                <h5>Node.js</h5>

              </div>
              <div className="item">
                <img src={python}/>
                <h5>Python</h5>
              </div>
              <div className="item">

                <img src={csharp}/>
                <h5>C#</h5>
              </div>
              <div className="item">
                <img src={ts}/>
                <h5>Typescript</h5>
              </div>
            </Carousel>
            <h4 style={{
              paddingTop: "1rem",
              paddingBottom: "1rem"
            }}>Databases</h4>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">

                <img src={mysql}/>
                <h5>MySQL</h5>
              </div>
              <div className="item">
                <img src={mongo}/>
                <h5>MongoDB</h5>
              </div>
              <div className="item">

                <img src={neo4j}/>
                <h5>Neo4j</h5>
              </div>
            </Carousel>
            <h4>Web development frameworks</h4>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">

                <img src={react}/>
                <h5>React.js</h5>
              </div>
              <div className="item">
                <img src={flask}/>
                <h5>Flask</h5>
              </div>
              <div className="item">

                <img src={django}/>
                <h5>Django</h5>
              </div>
            </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt=""/>
      <img className="background-image-right" src={colorSharp2} alt=""/>
    </section>
  )
}