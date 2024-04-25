import axios from "axios";


const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = JSON.parse(sessionStorage.getItem("token"));

  return {
    ...config,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${ token}`,
    },
  };
}); 
const requests = {
  post: (url, body, headers) =>
    instance.post(url, body, headers),
  get: (url, body) =>
    instance.get(url, body),
};

export default requests;

