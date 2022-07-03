import { KEY_NEWS_API } from "./../../configs/keyNewsApi";
import Axios from "axios";

export const newsApi = Axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    Authorization: KEY_NEWS_API,
  },
});
