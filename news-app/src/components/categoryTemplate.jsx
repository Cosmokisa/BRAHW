import { navBarCategories } from "../services/api";
import { useState, useEffect } from "react";
import NewsCard from "./newsCard.jsx";

function CategoryTemplate({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await navBarCategories(category);
        setArticles(data);
      } catch (error) {
        console.error("Failed to load articles:", error);
      }
    };

    loadArticles();
  }, [category]);

  return (
    <div>
      <h1>{category.toUpperCase()} News</h1>
      {articles.map((article) => (
        <NewsCard article={article} key={article.url} />
      ))}
    </div>
  );
}

export default CategoryTemplate;
