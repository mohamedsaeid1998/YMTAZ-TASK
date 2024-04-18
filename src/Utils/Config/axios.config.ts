
import axios from "axios";

const baseUrl = axios.create({
  baseURL: `https://ymtaz.sa/api/client`,
});

export default baseUrl;
