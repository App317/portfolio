import { Col } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col sm={6} md={4}>
      <a href={href} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="imgUrl" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
