import axios from "axios";

const instance = axios.create({
  baseURL: "https://samoelection.sit.kmutt.ac.th/",
  withCredentials: false,
});

export default instance;