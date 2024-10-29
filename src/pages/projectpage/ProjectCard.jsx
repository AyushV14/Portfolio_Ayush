import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className='project-card'>
      <img src={project.imgUrl} alt={project.name} />
      <div className='text-content'>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
      <Link to={`/projects/${project.id}`} className='view-details-button'>
        View Details
      </Link>
    </div>
  );
};

export default ProjectCard;
