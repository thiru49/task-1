import requests from "./httpServices";

//===============================================post======================================//

// Login
export const login = async (data) => {
  return await requests.post(`/api/user/login`, data);
};

// signupform
export const signUp= async (data) => {
  return await requests.post(`/api/user/register`, data);
};

// Image Upload
export const imageUpload= async (data) => {
  return await requests.post(`/api/uploads/store`, data);
};
