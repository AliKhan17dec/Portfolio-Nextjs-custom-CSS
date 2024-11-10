import React from 'react';
import Heading from './Heading';
import Card from './Card';
import '../styles/projects.css'; // Import custom CSS
import { link } from 'fs';

const data = [
  {
    id: 0,
    title: "Virtual Assistant",
    desc: "A Javascript based Virtual Assistant",
    img: "/project01.png",
    tags: ["Javascript", "HTML", "CSS"]
  },
  {
    id: 1,
    title: "Course Website",
    desc: "A Course Website using Bootstrap",
    img: "/project02.png",
    tags: ["Bootstrap", "HTML", "CSS"]
  },
  {
    id: 2,
    title: "Grocery Website",
    desc: "A Grocery Store Website using Tailwind CSS",
    img: "/project03.png",
    tags: ["Tailwind CSS", "HTML", "CSS"]
  },
  {
    id: 3,
    title: "Resume Builder",
    desc: "A Resume Builder Website using Javascript",
    img: "/project04.png",
    tags: ["Javascript", "HTML", "CSS"]
  },
  {
    id: 4,
    title: "Inventory Website",
    desc: "A Inventory Website using Typescript",
    img: "/project05.png",
    tags: ["Typescript", "HTML", "CSS"]
  },
];

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <Heading title='My Projects' />
      <div className='projects-grid'>
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
