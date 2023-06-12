import axios from "axios";

const searchPeopleApiClient = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

export const searchPeople = async (search: string) => {
  return searchPeopleApiClient
    .get(`/people/?search=${search}`)
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
