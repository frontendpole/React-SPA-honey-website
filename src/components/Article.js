import React from 'react';

const Article = (props) => {
  return (
    <article>
      <h3>{props.name}</h3>
      <p>{props.text}</p>
    </article>
  );
}

export default Article;