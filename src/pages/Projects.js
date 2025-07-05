import React from 'react';
import { motion } from 'framer-motion';
import { FaFolderOpen } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "FL Quick Park",
      description: "A mobile application designed for seamless online parking slot registration. It enables users to find, book, and manage parking spaces efficiently.",
      technologies: ["Flutter", "Firebase", "Dart"],
      githubLink: "https://github.com/surendarg2003/fl-quick-park"
    },
    {
      title: "Smart Policing",
      description: "An AI-enhanced surveillance system integrating computer vision, machine learning, and data analytics to detect and prevent crimes, enhancing public safety and law enforcement efficiency.",
      technologies: ["Python", "YOLO v5", "TensorFlow"],
      githubLink: "https://github.com/surendarg2003/Smart-policing- "
    },
    {
      title: "BusBuddy",
      description: "A smart bus pass renewal and ticketing app featuring real-time tracking, digital payments, route planning, and multi-language support to enhance commuter convenience and efficiency.",
      technologies: ["Android", "Java", "Retrofit"],
      githubLink: "https://github.com/surendarg2003/BusBuddy"
    }
  ];

  return (
    <>
      <section className="projects-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="main-heading"
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glowing-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3><FaFolderOpen style={{ marginRight: '8px', color: '#00ffcc' }} />{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
