import axios from "axios";

const api = axios.create();

api.interceptors.request.use(async (config) => {
  config.headers["api-token"] = process.env.API_TOKEN;

  return config;
});

export default api;
