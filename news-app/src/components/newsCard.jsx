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
      <h3 className="news-title">{article.title}</h3>
      <p className="news-author"> By {article.author}</p>
      <img className="news-img" src={article.urlToImage} alt="" />
      <p className="news-content">{article.content}</p>
      <a className="news-link" href={article.url}>
        Read more »
      </a>
    </div>
  );
}

export default NewsCard;
