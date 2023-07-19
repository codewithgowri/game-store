import axios from "axios";
export default axios.create({
  params: {
    key: "28ded4d48aef4a00a854519fe2f1a217",
  },
  baseURL: "https://api.rawg.io/api",
});
