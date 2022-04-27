import axios from "axios";

export const http = axios.create({
  baseUrl: "https://www.omdbapi.com",
});
