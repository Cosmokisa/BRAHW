//import axios from "axios";

const API_KEY = "684258456f0b4bd1a20f4e9686a4f2db";
const BASE_URL = "https://newsapi.org/v2";

// search every article published by over 150,000 different sources large and small in the last 5 years. This endpoint is ideal for news analysis and article discovery.
export const getNews = async () => {
  const response = await fetch(
    `${BASE_URL}/everything?q=keyword&apiKey=${API_KEY}`,
  );
  const data = await response.json();
  console.log("Fetched data:", data.articles);
  return data.articles;
};

// returns breaking news headlines for countries, categories, and singular publishers. This is perfect for use with news tickers or anywhere you want to use live up-to-date news headlines.

export const topHeadliners = async () => {
  const response = await fetch(`${BASE_URL}/top-headlines?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// search?

export const searchArticles = async (query) => {
  const response = await fetch(
    `${BASE_URL}/everything?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );
  const data = await response.json();
  return data.results;
};
