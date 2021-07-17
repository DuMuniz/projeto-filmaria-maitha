import axios from "axios";

const api = axios.create({
  baseURL: "https://www.sujeitoprogramador.com"
});

export default api;
