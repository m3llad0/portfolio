import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from '../assets/img/AO.png';
import shhout from '../assets/img/shhout.png';
import ww from '../assets/img/ww.png';
import projectex from '../assets/img/project-img3.png'
import ldm from '../assets/img/ss.png';
import peermentor from '../assets/img/pp.png';


import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const courseProjects = [
    {
      title: "Document administration",
      description: "Software solution for Alcaldia Alvaro Obregon",
      imgUrl: project1,
    }, 
    {
      title: "Shhootout",
      description: "Shooter game for AMEXVID to teach game design",
      imgUrl: shhout  
    },
    {
      title: "Wheelwise",
      description: "Ecommer platform for NDS",
      imgUrl: ww

    }
  ]
  const extraCurricular = [
    {
      title: "Anemic Panic",
      description: 'Submission for the Coding Blocks 2023 January Game Jam',
      imgUrl: projectex,
      href: "https://munij.itch.io/anemic-panic",
    },
    {
      title: "Líderes formando Líderes",
      description: "Helped a high school undergraduate build his application for the Líderes del mañana program to pursue a full scholarship to study at Tecnológico de Monterrey.",
      imgUrl: ldm
    },
    {
      title: "Peer mentoring",
      description: "Mentored a group of 11 first-year students at Tecnologico de Monterrey for their whole freshmen year.",
      imgUrl: peermentor,
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => 
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p> Here you will find a selection of my works, showcasing both academic and extracurricular projects. Explore how I have applied my knowledge to tackle challenges and create innovative solutions in various fields.</p> 
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                    <Nav.Item style={{width: "50%"}}>
                      <Nav.Link eventKey="first">Course Projects</Nav.Link>
                    </Nav.Item >
                    <Nav.Item style={{width: "50%"}}>
                      <Nav.Link eventKey="third">Extra curricular activities</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          courseProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          extraCurricular.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt=""/> */}
    </section>
  )
}