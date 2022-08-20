import axios from "axios";

const BASE_URL = "https://url/api/v1";

// Default Http -------------------------
export const httpDefault = axios.create({
  baseURL: BASE_URL,
});

// Private Http -------------------------
export const httpPrivate = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

