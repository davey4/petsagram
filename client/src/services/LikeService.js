import ApiClient from "./ApiClient";

export const __CreateLike = async (userId, postId, formData) => {
  try {
    const res = await ApiClient.post(
      `/likes/create/${postId}/${userId}`,
      formData
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetLikes = async (postId) => {
  try {
    const res = await ApiClient.get(`/likes/getlikes/${postId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteLikes = async (likeId) => {
  try {
    const res = await ApiClient.delete(`/likes/${likeId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
