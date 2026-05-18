import React from 'react'
import Icon from "./Icon.jsx";

function ProjectAction({ href, icon, label }) {
  if (!href) {
    return <span className="status-chip">Đang cập nhật</span>;
  }

  return (
    <a className="link-button" href={href} target="_blank" rel="noreferrer">
      <Icon name={icon} size={17} />
      {label}
    </a>
  );
}

function Projects({ projects }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {projects.map((project, index) => (
        <article key={project.title} className="project-card">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="project-number">0{index + 1}</span>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
                Backend
              </span>
            </div>
            <h3 className="mt-6 text-xl font-black text-white">{project.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <ProjectAction href={project.githubUrl} icon="github" label="GitHub" />
            <ProjectAction href={project.demoUrl} icon="external" label="Demo" />
          </div>
        </article>
      ))}
    </div>
  );
}

export default Projects;
