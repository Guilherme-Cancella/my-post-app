import React, { useState, useEffect } from "react";
import { getPost, updatePost, deletePost } from "../services/api";

function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    const postId = props.match.params.id;
    loadPost(postId);
  }, [props.match.params.id]);

  const loadPost = async (postId) => {
    try {
      const response = await getPost(postId);
      setPost(response.data);
    } catch (error) {
      console.error("Error loading post:", error);
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      await updatePost(post.id, post);
      console.log("Post updated successfully.");
      setEditing(false);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(post.id);
      console.log("Post deleted successfully.");
      // Você pode redirecionar o usuário para a lista de postagens ou outra página aqui.
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>Published At: {post.published_at}</p>
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
          <button onClick={handleDelete}>Delete</button>{" "}
          {/* Você estava faltando essa parte */}
        </div>
      )}
    </div>
  );
}

export default PostDetail;
