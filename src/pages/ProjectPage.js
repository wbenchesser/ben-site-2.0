import React from 'react';
import { projects } from '../data/projects';
import '../App.css';

function useProjectFromHash() {
  const [project, setProject] = React.useState(null);

  React.useEffect(() => {
    const sync = () => {
      const id = (window.location.hash.split('/')[2] || '').trim();
      const found = projects.find((p) => p.id === id);
      setProject(found || null);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  return project;
}

export default function ProjectPage() {
  const project = useProjectFromHash();

  if (!project) {
    return (
      <main className="page">
        <div className="container">
          <p>Project not found. <a href="#/projects">Back to Projects</a></p>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="container project-container">
        <p className="crumbs"><a href="#/projects">Projects</a> / <span>{project.title}</span></p>
        <h1 className="page-title">{project.title}</h1>
        <p className="project-summary">{project.summary}</p>

        {project.image ? (
          <div className="project-hero">
            <img src={project.image} alt={project.title} />
          </div>
        ) : null}

        {project.tech?.length ? (
          <section className="project-tech">
            <h2>Tech &amp; Tools</h2>
            <ul>
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <article
          className="project-body"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />

        {project.repo ? (
          <div className="project-cta">
            <a
              className="project-github-btn"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ) : null}
      </div>
    </main>
  );
}
