import axios from 'axios';

const API_BASE_URL = 'http://localhost:3100/auth';

// Create an admin account
export const createAdmin = async (data: { username: string; password: string; isSuperAdmin?: boolean }) => {
  const response = await axios.post(`${API_BASE_URL}/signup`, data);
  return response.data;
};

// Get all admin accounts
export const getAllAdmins = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

// Delete an admin account
export const deleteAdmin = async (id: number) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};

// Update admin account password
export const updatePassword = async (id: number, password: string) => {
  const response = await axios.put(`${API_BASE_URL}/${id}/password`, { password });
  return response.data;
};
