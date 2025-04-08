import axiosInstance from '../utils/axiosInstance';

export const login = async (credentials) => {
  const { data } = await axiosInstance.post('/auth/login', credentials);
  return data;
};
