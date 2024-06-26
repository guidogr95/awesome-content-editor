import axios from "axios";
import { firebaseAuth } from "@/firebase/config";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL
});

const getAuthToken = async () => {
  try {
    return `Bearer ${await firebaseAuth.currentUser?.getIdToken()}`;
  } catch(err) {
  };
};


axiosClient.interceptors.request.use(async (config) => {
  config.headers.Authorization = await getAuthToken();
  return config;
});

export default axiosClient;
