import axios from "axios";

const BASE_URL = "https://new-stack-backend-rote.vercel.app/";
// const BASE_URL = "https://review-backend-beige.vercel.app/api";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` , "Access-Control-Allow-Origin": "*" },

});
