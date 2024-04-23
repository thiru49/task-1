import requests from "./httpServices";

//===============================================post======================================//

// Login
export const login = async (data) => {
  return await requests.post(`/api/user/login`, data);
};
