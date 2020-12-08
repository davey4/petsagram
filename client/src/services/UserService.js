import ApiClient from "./ApiClient";

export const __GetUserName = async (id) => {
  try {
    const res = await ApiClient.get(`/users/user/name/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetUserByName = async (userName) => {
  try {
    const res = await ApiClient.get(`/users/name/${userName}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetUser = async (userId) => {
  try {
    const res = await ApiClient.get(`/users/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __FollowUser = async (userId, followingId) => {
  try {
    const res = await ApiClient.post(`/users/follow/${userId}/${followingId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UnfollowUser = async (userId, followingId) => {
  try {
    const res = await ApiClient.delete(
      `/users/unfollow/${userId}/${followingId}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetFollowers = async (followingId) => {
  try {
    const res = await ApiClient.get(`/users/followers/${followingId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetFollowing = async (userId) => {
  try {
    const res = await ApiClient.get(`/users/following/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __CreateUser = async (formData) => {
  try {
    const res = await ApiClient.post("/users/register", formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __LoginUser = async (formData) => {
  try {
    const res = await ApiClient.post("/users/login", formData);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __CheckSession = async () => {
  try {
    const res = await ApiClient.get("/users/refresh/session");
    return res.data;
  } catch (error) {
    throw error;
  }
};
