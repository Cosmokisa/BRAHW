import { newsArticles } from "../services/news-service.js";
import { useState, useEffect } from "react";
import NewsCard from "./newsCard.jsx";

function CategoryTemplate({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await newsArticles({ category });
        setArticles(data);
      } catch (error) {
        console.error("Failed to load articles:", error);
      }
    };

    loadArticles();
  }, [category]);

  return (
    <div>
      {articles.map((article) => (
        <NewsCard article={article} key={article.url} />
      ))}
    </div>
  );
}

export default CategoryTemplate;
