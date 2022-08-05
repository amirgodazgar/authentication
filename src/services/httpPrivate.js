import axios from "axios";

const baseUrl = "https://dalahou.rasm.io/api/v1";

const httpPrivate = axios.create({
  baseURL: baseUrl,
});

export default httpPrivate;
