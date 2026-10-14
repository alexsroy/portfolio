
import React, { useState } from 'react';
import dalMicrowaveImg from '/images/dalMicrowave.png';
import dalMastImg from '/images/dalMast.png';
import reachHFXImg from '/images/reachHFX.png';

import './Projects.css';

function Projects() {

  const projects = [
    {
      id: 1,
      title: 'DAL Microwave',
      category: 'Website',
      description:
        'Interactive Map of all microwaves on Dalhousie campus with the ability to leave reviews on experience with the appliances',
      technologies: ['React', 'Django', 'PostgreSQL'],
      image: dalMicrowaveImg,
      demo: 'https://dalmicrowave.ca',
    },
    {
      id: 2,
      title: 'DAL MAST',
      category: 'Robotics',
      description:
        'ROS 2 runner and simulation for the Marine Autonomous Sailing Team. Built in Python to plot course and control sail trim and rudder angle',
      technologies: ['Python', 'ROS 2'],
      image: dalMastImg,
      github: 'https://github.com/alexsroy/DAL_MAST',
    },
    {
      id: 3,
      title: 'Reach HFX',
      category: 'website',
      description:
        'Real time halifax transit app for iOS combining realtime GTFS data with the static bus/ferry schedule',
      technologies: ['React Native', 'Expo Go', 'Express'],
      image: reachHFXImg,
      github:
        'https://github.com/alexsroy/reach_hfx_frontent',
      demo:
        'https://reachhfx.vercel.app/',
    },
  ];



  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-image">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
              />

              <div className="project-overlay">
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-link github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                      title="View Source Code"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523-.117-3.176 0 0 1.008-.322 3.3 1.23A11.47 11.47 0 0 1 12 5.803c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 5.92.43.372.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.696.825.578C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0z" />
                      </svg>
                
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      className="project-link demo-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      title="View Live Application"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

