import axios from "axios";

export const url = "http://localhost:8000";

export const fetchUrls = () => axios.get(url);
export const createUrl = originalUrl => axios.post(url + "/shortenUrl", originalUrl);
