import { useState } from "react";
import { newsArticles } from "../services/news-service.js";
import "../styles/search.css";
import NewsCard from "./newsCard.jsx";

function Search() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!searchQuery.trim()) return;

    if (loading) return;
    setLoading(true);

    try {
      const searchResults = await newsArticles({ q: `${searchQuery}` });
      setArticles(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search articles..");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  return (
    <>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Type to search..."
          className="search-input"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      {loading && <div className="loading">Searching...</div>}
      {error && <div className="error">{error}</div>}
      <div>
        {articles?.map((article) => (
          <NewsCard article={article} key={article.url} />
        ))}
      </div>
    </>
  );
}

export default Search;
