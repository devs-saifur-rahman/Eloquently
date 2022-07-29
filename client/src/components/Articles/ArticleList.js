import React from 'react';
import Article from './Article';


const ArticleList = (props) => {

  const { articles } = props;

  return (
    <div>
      {
        articles.map((article, index) => (
          <Article key={article.id} title={article.title} author={article.author}>
            <p>{article.description}</p>
          </Article>
        ))
      }
    </div>
  )
}

export default ArticleList