import React from "react";
import "./scrapbook.css";
// import cuttlefish1 from "./images/cuttlefish1.jpg";
import imageData from "./image_data";
import ScrapbookImage from "./scrapbook_images";

const Scrapbook = () => {
  const images = imageData.map((item, index) => {
    return <ScrapbookImage key={index} about={item} />;
  });

  return <div className="scrapbook-container">{images}</div>;
};

export default Scrapbook;
