import React from 'react';
import Image from 'next/image';
import '../styles/card.css'; // Import the custom CSS

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="card-container" data-aos="zoom-in-up">
      <div>
        <Image
          className="card-image"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>
      
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-description">{desc}</div>
        <div className="card-tags">
          {tags.map((el) => (
            <div className="tag" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
