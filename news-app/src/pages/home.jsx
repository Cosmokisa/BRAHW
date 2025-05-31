import { getNews } from "../services/api";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import NewsCard from "../components/NewsCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await getNews();
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
            <Grid item xs={3}>
              <NewsCard article={article} key={article.url} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
