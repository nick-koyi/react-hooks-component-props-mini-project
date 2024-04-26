import React from "react";
import Article from './Article.js'

function ArticleList({posts}) {
  return (
    <div>
    {posts.map((post) => (
      <Article
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    ))}
  </div>
  );
}

export default ArticleList;
