import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import PortfolioPicture from '../Portfolio Picture.jpg';  // Importing the image with extension
import './Home.css';

const Home = () => {
  const particlesOptions = {
    fullScreen: {
      enable: true,
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#00ffcc"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 3
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out"
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    background: {
      color: "#ffffff"
    },
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1
    }
  };

  return (
    <>
      <Particles {...particlesOptions} />

      <section className="home">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={PortfolioPicture} alt="Surendar G" className="profile-pic" />
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Surendar G
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="subtitle"
          >
            Aspiring Mobile App Developer | Flutter Expert | Blockchain Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="summary"
          >
            B.Tech IT Student at Hindusthan Institute of Technology with hands-on experience in Flutter, AI models, UI design, and UML modeling.
          </motion.p>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="https://linkedin.com/in/surendar1205 " target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
            <a href="https://github.com/surendarg2003 " target="_blank" rel="noopener noreferrer">💻 GitHub</a>
          </motion.div>

          <motion.a
            href="/resume/Surendar-G-FlowCV-Resume-20250223 (2).pdf"
            download
            className="download-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            📄 Download Resume
          </motion.a>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
