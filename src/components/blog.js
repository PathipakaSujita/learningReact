import React from 'react';

function Blog(props) {
  const sidebar = (
    <ul>{props.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
  );

  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p> {post.content}</p>
    </div>
  ));

  return (
    <div>
      <h1> Blog </h1>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const POSTS = [
  { id: 1, title: 'Hello World', content: 'Welcome to React' },
  { id: 2, title: 'Introduction', content: 'npx create-react-app appName' }
];

export { Blog, POSTS };
