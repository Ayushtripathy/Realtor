import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchAPI = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "869a937c92msheaf9fa4dbec4a35p1db80ejsn62d97821fbe1",
    },
  });
  return data;
};
