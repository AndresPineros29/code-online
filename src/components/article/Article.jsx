import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text, url }) => {
  return (
    <div className="cdon__blog-container_article">
      <div className="cdon__blog-container_article-image">
        <a href={url} target="_blank">
          <img src={imgUrl} alt="blog_image" />
        </a>
      </div>
      <div className="cdon__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>
          <a href={url} target="_blank">
            Read Full Article
          </a>
        </p>
      </div>
    </div>
  );
};

export default Article;
