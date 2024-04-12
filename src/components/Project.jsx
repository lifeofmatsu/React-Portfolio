import React from 'react';

const Project = ({ title, description, image, deployedUrl, repoUrl }) => {
    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={image} alt={title} style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} />
        <p>{description}</p>
        <a href={deployedUrl}>Deployed App</a>
        <a href={repoUrl}>GitHub Repo</a>
      </div>
    );
  };

export default Project;
