import React, { useState, useEffect } from "react";
import { listPosts } from "../services/api";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [paginated, setPaginated] = useState(true);

  useEffect(() => {
    loadPosts();
  }, [titleFilter, paginated]);

  const loadPosts = async () => {
    try {
      const response = await listPosts(paginated, titleFilter);
      setPosts(response.data);
    } catch (error) {
      console.error("Error loading posts:", error);
    }
  };

  return (
    <div>
      <h2>Post List</h2>
      <input
        type="text"
        placeholder="Filter by Title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <label>
        Paginated:
        <input
          type="checkbox"
          checked={paginated}
          onChange={() => setPaginated(!paginated)}
        />
      </label>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
