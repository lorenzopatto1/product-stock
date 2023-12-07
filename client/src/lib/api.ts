import axios from "axios";

export const api = axios.create({
  baseURL: "https://lorenzo-simple-crud.onrender.com/",
});
