import React from "react";
import "./Works.css";

const worksData = [
  {
    title: "Candle",
    description: "Creative Candle Light",
    image: "candle.avif",
  },
  {
    title: "Paint",
    description: "Creative wall painting",
    image: "candle.avif",
  },
  {
    title: "UI/UX Sample",
    description: "UI/UX Sample design mockup",
    image: "candle.avif",
  },
  {
    title: "Packet",
    description: "Packet design mockup",
    image: "candle.avif",
  },
  {
    title: "Packet",
    description: "Another packet design mockup",
    image: "candle.avif",
  },
  {
    title: "Cream",
    description: "Creative cream box design",
    image: "candle.avif",
  },
];

const Works = () => {
  return (
    <div className="works">
      <h1>MY WORKS</h1>
      <div className="filters">
        <button className="active">ALL</button>
        <button>UI/UX DESIGN</button>
        <button>HTML & CSS</button>
        <button>REACT JS</button>
        <button>NODE JS</button>
      </div>
      <div className="works-grid">
        {worksData.map((work, index) => (
          <div className="work-card" key={index}>
            <img src={work.image} alt={work.title} />
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
