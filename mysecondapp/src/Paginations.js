import React, { useState, useEffect } from 'react';
import Sub from './Sub';
import Post from './Post';
const url = 'https://jsonplaceholder.typicode.com/posts';

export default function Paginations() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

  return (<div>
      {posts.length > 0 ? (
        <>
          <Sub
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
  </div>);
}
