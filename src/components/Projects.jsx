import React from 'react'
import Icon from "./Icon.jsx";

function Projects({ projects }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {projects.map((project) => (
        <article key={project.title} className="project-card">
          <div>
            <h3 className="text-xl font-bold text-ink">{project.title}</h3>
            <p className="mt-4 leading-7 text-slate-700">{project.description}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-7 flex gap-3">
            <a className="link-button" href={project.githubUrl} target="_blank" rel="noreferrer">
              <Icon name="github" size={17} />
              GitHub
            </a>
            <a className="link-button" href={project.demoUrl} target="_blank" rel="noreferrer">
              <Icon name="external" size={17} />
              Demo
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Projects;
