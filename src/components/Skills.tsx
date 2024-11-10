import React from 'react';
import '../styles/skills.css'; // Import custom CSS

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        <div>
          <h2 className='skills-heading' data-aos="zoom-in-up">Technologies I work with</h2>
          <p className='skills-description' data-aos="zoom-in-up">
            I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I am also proficient in Tailwind CSS for efficient styling and design. Additionally, I have hands-on experience with Linux, AWS, Git, and GitHub, enabling me to work effectively in diverse development and deployment environments. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        <div>
          <div className='skills-list'>
            <div className='skills-column'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">HTML5</h2>
            </div>
            <div className='skills-column'>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Git & GitHub</h2>
              <h2 data-aos="zoom-in-up">AWS</h2>
              <h2 data-aos="zoom-in-up">Linux</h2>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Skills;
