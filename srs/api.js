import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000"; // URL Flask API

export const getTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/tasks`);
  return response.data.tasks;
};

export const addTask = async (text) => {
  await axios.post(`${API_BASE_URL}/tasks`, { text });
};

export const updateTask = async (id, done) => {
  await axios.put(`${API_BASE_URL}/tasks/${id}`, { done });
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_BASE_URL}/tasks/${id}`);
};
