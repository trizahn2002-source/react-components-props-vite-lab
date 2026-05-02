import REact from "react";

//Article component - displays a single blog post
REceives: title, date, preview props from ArticleList.jsx
function Article({ title, date, preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;