"use client";

import React, { useState, useEffect } from "react";

function Indicators({ articles }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY + window.innerHeight / 2;
    const newIndex = articles.findIndex((article) => {
      const element = document.getElementById(article.id);
      return (
        element &&
        scrollY >= element.offsetTop &&
        scrollY < element.offsetTop + element.offsetHeight
      );
    });

    setActiveIndex(newIndex === -1 ? 0 : newIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [articles]);

  return (
    <div className="indicators">
      {articles.map((article, index) => (
        <div
          key={article.id}
          className={`indicator ${activeIndex === index ? "active" : ""}`}
          onClick={() =>
            document
              .getElementById(article.id)
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default Indicators;
