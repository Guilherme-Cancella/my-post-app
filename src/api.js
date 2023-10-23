import axios from "axios";

const api = axios.create({
  baseURL: "https://gracious-elgamal.173-249-10-142.plesk.page/api",
  headers: {
    "Api-Authorization":
      "Bearer $2y$10$x3wqNWc4ZonF6dVWKAPnMuU1A258mgKbGWziVPdL5mhzqQwlhQEqK",
    Authorization: "Bearer 35|bkdTKk4t5WoNeApCMkVwWLBhmkjtarmeULMfwKiW",
  },
});

export const listPosts = (paginated = false, title = "") => {
  const params = { paginated, title };
  return api.get("/posts", { params });
};

export const createPost = (post) => {
  return api.post("/posts", post);
};

export const getPost = (id) => {
  return api.get(`/posts/${id}`);
};

export const updatePost = (id, post) => {
  return api.put(`/posts/${id}`, post);
};

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};
