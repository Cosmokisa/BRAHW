import axios from "axios";

// 50 articles each time

const API_KEY = "684258456f0b4bd1a20f4e9686a4f2db";
const BASE_URL = "https://newsapi.org/v2";

// lastest articles for home page
export const lastestNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: "keyword",
        sortBy: "publishedAt",
        language: "en",
        pageSize: "50",
        apiKey: API_KEY,
      },
    });

    console.log("Fetched data:", response.data.articles);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

// sidebar: filter by country (5), by category (5), by phrase (it should work seperatly and together)

// navbar categories, for example for business, technology, health, sports
export const navBarCategories = async (category = "general") => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: "us",
        category,
        pageSize: "50",
        apiKey: API_KEY,
      },
    });

    console.log("Business articles", response.data.articles);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
