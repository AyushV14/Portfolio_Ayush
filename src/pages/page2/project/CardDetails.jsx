import React from 'react';
import './CardDetails.css';

export default function CardDetails({ project }) {
  // Limit keywords to the first 3
  const keywords = project.keywords.split(',').slice(0, 3);

  return (
    <div>
      <article className="article-wrapper">
        <div className="rounded-lg container-project">
          <img src={project.imgUrl} alt={project.name} className="project-image" />
        </div>
        <div className="project-info"> 
          <div className="flex-pr">
            <div className="project-title">{project.name}</div>
            <div className="project-hover">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <svg
                  style={{ color: 'black' }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div className="types">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="project-type"
              >
                • {keyword.trim()}
              </span>
            ))}
          </div>
          <div className="project-description">
            {project.description}
          </div>
        </div>
      </article>
    </div>
  );
}
