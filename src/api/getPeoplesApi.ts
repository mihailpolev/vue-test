import axios from "axios";

const getPeoplesApiClient = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

export const getPeoples = async (page: number) => {
  return getPeoplesApiClient
    .get(`/people/?page=${page}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(`Error message: ${error.message}`);
      }
    });
};
