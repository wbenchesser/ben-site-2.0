import React from 'react';
import { projects } from '../data/projects';
import '../App.css';

export default function ProjectList() {
  return (
    <main className="page page-projects">
      <div className="container">
        <h1 className="page-title">Projects</h1>
        <p className="muted">A collection of things I've built or contributed to.</p>

        <div className="project-grid" role="list">
          {projects.map((project) => {
            const imageStyle = project.image ? { backgroundImage: `url(${project.image})` } : undefined;
            const imageClass = project.image ? 'project-card-image' : 'project-card-image placeholder';

            return (
              <a
                key={project.id}
                className="project-card"
                role="listitem"
                href={`#/projects/${project.id}`}
              >
                <div className="project-card-inner">
                  <div className={imageClass} style={imageStyle} role="presentation" />
                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-summary">{project.summary}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
