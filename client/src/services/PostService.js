import ApiClient from "./ApiClient";

export const __CreatePost = async (formData, userId) => {
  try {
    const res = await ApiClient.post(`/posts/${userId}`, formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetAllPosts = async () => {
  try {
    const res = await ApiClient.get("/posts/viewall");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetPostsByUserId = async (userId) => {
  try {
    const res = await ApiClient.get(`/posts/byuser/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetAllPostsAndOrderByRecent = async () => {
  try {
    const res = await ApiClient.get("/posts/recent");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdatePost = async (formData, postId) => {
  try {
    const res = await ApiClient.put(`/posts/${postId}`, formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeletePost = async (postId) => {
  try {
    const res = await ApiClient.delete(`/posts/${postId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __LikePost = async (postId) => {
  try {
    const res = await ApiClient.put(`/posts/like/${postId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UnlikePost = async (postId) => {
  try {
    const res = await ApiClient.put(`/posts/unlike/${postId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
