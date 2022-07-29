import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ArticleList from './components/Articles/ArticleList';

const article = [{
  id: 1,
  "title": "Post Title 1",
  "author": "Post author 1",
  "description": "Post description 1"
}, {
  id: 2,
  "title": "Post Title 2",
  "author": "Post author 2",
  "description": "Post description 2"
}];

function App() {
  return (
    <React.Fragment>
      <Header />
      <ArticleList articles={article} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
