import { newsArticles } from "../services/news-service.js";
import { useState, useEffect } from "react";
import NewsCard from "../components/newsCard.jsx";

function Home({ category }) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await newsArticles({
          category: "general",
        });
        setArticles(data);
      } catch (error) {
        console.error("Failed to load articles:", error);
        setError("Failed to load articles.");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [category]);

  return (
    <div>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          {articles?.map((article) => (
            <NewsCard article={article} key={article.url} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
