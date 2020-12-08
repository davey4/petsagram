import ApiClient from "./ApiClient";

export const __CreateNotification = async (userId, formData) => {
  try {
    const res = await ApiClient.post(`/notification/${userId}`, formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetNotifications = async (userId) => {
  try {
    const res = await ApiClient.get(`/notification/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteNotification = async (id) => {
  try {
    const res = await ApiClient.delete(`/notification/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
