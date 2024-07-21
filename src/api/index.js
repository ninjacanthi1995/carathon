import axios from "axios";

export const sendRequest = (payload) => {
  console.log("env", process.env.REACT_APP_BE_URL);
  axios
    .post(`${process.env.REACT_APP_BE_URL}/request`, payload)
    .then(function (response) {
      console.log(response);
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};
