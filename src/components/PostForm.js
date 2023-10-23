import React, { useState } from "react";
import { createPost } from "../services/api";

function PostForm() {
  const [post, setPost] = useState({
    title: "",
    tags: "",
    published_at: "",
    featured_until: "",
    youtube_link: "",
    primary_text: "",
    secondary_text: "",
    seo_title: "",
    seo_tags: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(post);
      console.log("Post created successfully.");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
        />
        <label>Tags:</label>
        <input
          type="text"
          value={post.tags}
          onChange={(e) => setPost({ ...post, tags: e.target.value })}
        />
        <label>Published At:</label>
        <input
          type="datetime-local"
          value={post.published_at}
          onChange={(e) => setPost({ ...post, published_at: e.target.value })}
        />
        {/* ... other input fields */}
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default PostForm;
