import { lastestNews } from "../services/api";
import { useState, useEffect } from "react";
import NewsCard from "../components/newsCard.jsx";

function Home() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await lastestNews();
        setArticles(data);
      } catch (error) {
        console.error("Failed to load articles:", error);
        setError("Failed to load articles.");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <div>
      {articles?.map((article) => (
        <NewsCard article={article} key={article.url} />
      ))}
    </div>
  );
}

export default Home;
