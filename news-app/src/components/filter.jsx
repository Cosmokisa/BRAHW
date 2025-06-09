// import { useState, useEffect } from "react";
// import { newsArticles } from "../services/news-service.js";
//
// function Filter() {
//   const [filterQuery, setFilterQuery] = useState("");
//
//   useEffect(() => {
//     const loadArticles = async () => {
//       try {
//         const data = await newsArticles();
//         setFilterQuery(data);
//       } catch (error) {
//         console.error("Failed to load articles:", error);
//       }
//     };
//     loadArticles();
//   }, []);
//   return (
//     <div>
//       <h3>Sort by</h3>
//       <input type="checkbox" value="relevancy" />
//       <input type="checkbox" value="popularity" />
//       <input type="checkbox" value="most recent" />
//       <h3>SORT BY LANGUAGE</h3>
//       <input type="checkbox" value="ES" />
//       <input type="checkbox" value="FR" />
//       <input type="checkbox" value="IT" />
//       <input type="checkbox" value="PT" />
//       <input type="checkbox" value="FR" />
//       <input type="checkbox" value="AR" />
//       <h3>PUBLICATION PERIOD</h3>
//       <label htmlFor="start-date">FROM</label>
//       <input type="date" id="start-date" />
//       <label htmlFor="end-date">FROM</label>
//       <input type="date" id="end-date" />
//     </div>
//   );
// }
