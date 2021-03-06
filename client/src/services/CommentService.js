import ApiClient from "./ApiClient";

export const __CreateComment = async (userId, postId, formData) => {
  try {
    const res = await ApiClient.post(
      `/comments/${userId}/post/${postId}`,
      formData
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetComments = async (postId) => {
  try {
    const res = await ApiClient.get(`/comments/view/${postId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteComment = async (commmentId) => {
  try {
    const res = await ApiClient.delete(`/comments/${commmentId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
