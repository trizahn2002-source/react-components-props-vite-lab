import React from "react";
import Article from "./Article";

//ArticleLIst component - renders all articles
//Receives: articles array from App.jsx 
function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article) => (
        <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
      ))}
    </main>
  );
}

export default ArticleList;