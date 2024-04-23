import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import pokeImg from '../assets/img/pokedex.jpg';
import foodRecipeImg from '../assets/img/foodRecipes.jpg';
import restaurantImg from '../assets/img/restaurantMockup.jpg';
import todoListImg from '../assets/img/todoList.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';

const Projects = () => {
  const projects = [
    {
      title: 'Pokèdex',
      description: 'Browse through all the Pokèmon with use of PokèAPI!',
      imgUrl: pokeImg,
    },
    {
      title: 'Food Recipes',
      description:
        'Search through all kinds of recipes from anything in your pantry!',
      imgUrl: foodRecipeImg,
    },
    {
      title: 'Restaurant Mockup',
      description: 'A mockup website layout for a fake restaurant.',
      imgUrl: restaurantImg,
    },
    {
      title: 'To-Do List',
      description: 'A simple list to manage your tasks.',
      imgUrl: todoListImg,
    },
    {
      title: 'Interactive Image Gallery',
      description: 'A gallery of images that follows your mouse in a trail!',
      imgUrl: pokeImg,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: pokeImg,
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
                <Tab.Pane eventKey="second">More to be made...</Tab.Pane>
                <Tab.Pane eventKey="third">More to be made...</Tab.Pane>
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
