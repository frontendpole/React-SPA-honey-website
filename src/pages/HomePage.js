import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    name: "Who are we?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi corporis dolorum sapiente quae minus dolores perspiciatis modi vero architecto consequatur illum ipsa, libero et! Amet earum totam ex hic!"
  },
  {
    id: 2,
    name: "What's our passion?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi corporis dolorum sapiente quae minus dolores perspiciatis modi vero architecto consequatur illum ipsa, libero et! Amet earum totam ex hic!"
  },
  {
    id: 3,
    name: "What inspires us?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi corporis dolorum sapiente quae minus dolores perspiciatis modi vero architecto consequatur illum ipsa, libero et! Amet earum totam ex hic!"
  },
  {
    id: 4,
    name: "Where can you find us?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi corporis dolorum sapiente quae minus dolores perspiciatis modi vero architecto consequatur illum ipsa, libero et! Amet earum totam ex hic!"
  }
]

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ))
  return (
    <div className='home'>
      <h1>Welcome to our hive!</h1>
      <h2></h2>
      {artList}
    </div>
  );
}

export default HomePage;