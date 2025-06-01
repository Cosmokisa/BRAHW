import "../styles/card.css";

function NewsCard({ article }) {
  function onBookmark() {
    alert("Clicked");
  }
  return (
    <div className="news-card">
      <button className="news-bookmark" onClick={onBookmark}>
        Save
      </button>
      {/*<CardMedia*/}
      {/*  component="img"*/}
      {/*  image={article.urlToImage}*/}
      {/*  alt={article.title}*/}
      {/*/>*/}

      <h3 className="news-title">{article.title}</h3>
      <p className="news-content">{article.description}</p>
      <a className="news-link" href={article.url}>
        See the full article..
      </a>
    </div>
  );
}

export default NewsCard;
