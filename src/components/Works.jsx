import React, { useState } from "react";
import "./Works.css";

const worksData = [
  {
    title: "Candle",
    description: "Creative Candle Light",
    image: "candle.avif",
    type: "HTML & CSS",
  },
  {
    title: "Paint",
    description: "Creative wall painting",
    image: "candle.avif",
    type: "UI/UX DESIGN",
  },
  {
    title: "UI/UX Sample",
    description: "UI/UX Sample design mockup",
    image: "candle.avif",
    type: "UI/UX DESIGN",
  },
  {
    title: "Packet",
    description: "Packet design mockup",
    image: "candle.avif",
    type: "REACT JS",
  },
  {
    title: "Packet",
    description: "Another packet design mockup",
    image: "candle.avif",
    type: "NODE JS",
  },
  {
    title: "Cream",
    description: "Creative cream box design",
    image: "candle.avif",
    type: "HTML & CSS",
  },
];

const Works = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filteredWorks = selectedFilter === "ALL"
    ? worksData
    : worksData.filter((work) => work.type === selectedFilter);

  return (
    <div className="works">
      <h1>MY WORKS</h1>

      <div className="filters">
        {["ALL", "UI/UX DESIGN", "HTML & CSS", "REACT JS", "NODE JS"].map((filter) => (
          <button
            key={filter}
            className={`${selectedFilter === filter ? "active bounce" : ""}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="works-grid">
        {filteredWorks.map((work, index) => (
          <div className="work-card fade-in" key={index}>
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
