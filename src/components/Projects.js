import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import triviaImg from '../assets/img/trivia-app.jpg';
import pokeImg from '../assets/img/pokedex.jpg';
import foodRecipeImg from '../assets/img/foodRecipes.jpg';
import restaurantImg from '../assets/img/restaurantMockup.jpg';
import todoListImg from '../assets/img/todoList.jpg';
import mysteryImg from '../assets/img/mystery.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';

const Projects = () => {
  const projects = [
    {
      title: 'Trivia',
      description:
        'A trivia app where you can quiz yourself on various categories!',
      imgUrl: triviaImg,
      href: 'https://app317-trivia-app.netlify.app/',
    },
    {
      title: 'Pokèdex',
      description: 'Browse through all the Pokèmon with use of PokèAPI!',
      imgUrl: pokeImg,
      href: 'https://app317.github.io/pokedex',
    },
    {
      title: 'Food Recipes',
      description:
        'Search through all kinds of recipes from anything in your pantry!',
      imgUrl: foodRecipeImg,
      href: 'https://app317.github.io/food_recipes',
    },
    {
      title: 'To-Do List',
      description: 'A simple list to manage your tasks.',
      imgUrl: todoListImg,
      href: 'https://app317.github.io/todolist',
    },
    {
      title: 'Restaurant Mockup',
      description: 'WORK IN PROGRESS',
      imgUrl: restaurantImg,
    },
    {
      title: 'Future project to be made...',
      description: '',
      imgUrl: mysteryImg,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              These are the projects that I have worked on. I try to look for
              either interesting ideas to make, or working with a concept or
              library that I'm not too keen on to get more familar with it.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className="tab-in-progress">
                  More to be made...
                </Tab.Pane>
                <Tab.Pane eventKey="third" className="tab-in-progress">
                  More to be made...
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="colorSharp2"
      />
    </section>
  );
};

export default Projects;
