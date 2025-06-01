import { lastestNews } from "../services/api";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import NewsCard from "../components/newsCard.jsx";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearch = (event) => {
    event.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for articles"
          className="search-input"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="articles-grid">
        <Grid container spacing={2}>
          {articles?.map((article) => (
            <Grid key={article.url}>
              <NewsCard article={article} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
