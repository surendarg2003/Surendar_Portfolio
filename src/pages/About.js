import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// Import valid Font Awesome icons
import {
  FaMobileAlt,
  FaPaintBrush,
  FaUserPlus,
  FaUserFriends,
  FaCommentDots,
  FaBrain,
  FaAndroid,
} from 'react-icons/fa';

const About = () => {
  const education = [
    {
      degree: "B.Tech Information Technology",
      institution: "Hindusthan Institute of Technology, Coimbatore",
      duration: "2022 - Present",
      grade: "CGPA: 7.5"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "H.N.U.P.R. Mat. Hr. Sec. School",
      duration: "2021",
      grade: "Percentage: 90%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "H.N.U.P.R. Mat. Hr. Sec. School",
      duration: "2019",
      grade: "Percentage: 90%"
    }
  ];

  const skills = [
    { name: "Flutter", Icon: FaMobileAlt },
    { name: "UI/UX Design", Icon: FaPaintBrush },
    { name: "UML Modeling", Icon: FaUserPlus },
    { name: "Leadership", Icon: FaUserFriends },
    { name: "Communication", Icon: FaCommentDots },
    { name: "AI & ML Basics", Icon: FaBrain },
    { name: "Android Development", Icon: FaAndroid },
  ];

  const interests = ["IoT", "Ethical Hacking", "Cloud Security"];

  const activities = [
    "District-Level Footballer",
    "Artist & Winner in Art Competitions",
    "Dancer (Won inter-communal competitions)"
  ];

  return (
    <>
      <section className="about-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="main-heading"
        >
          About Me
        </motion.h2>

        {/* Education */}
        <motion.div
          className="education glowing-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Education</h3>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>
                <h4>{edu.degree}</h4>
                <p><strong>{edu.institution}</strong></p>
                <p>{edu.duration} | {edu.grade}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="skills glowing-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Skills</h3>
          <ul>
            {skills.map(({ name, Icon }, index) => (
              <li key={index}>
                <Icon size={20} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Interests */}
        <motion.div
          className="interests glowing-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Interests</h3>
          <ul>
            {interests.map((interest, index) => (
              <li key={index}>🚀 {interest}</li>
            ))}
          </ul>
        </motion.div>

        {/* Extra Curricular */}
        <motion.div
          className="extra-curricular glowing-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Extra-Curricular Activities</h3>
          <ul>
            {activities.map((activity, index) => (
              <li key={index}>🏅 {activity}</li>
            ))}
          </ul>
        </motion.div>
      </section>
    </>
  );
};

export default About;
