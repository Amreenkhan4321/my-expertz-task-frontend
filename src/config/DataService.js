import axios from "axios";

const baseUrl = "http://localhost:3030/api/";
const DataService = axios.create({
  baseURL: baseUrl,
});

export default DataService;
