import { useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    alert(searchQuery);
  };
  return (
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
  );
}

export default Search;
