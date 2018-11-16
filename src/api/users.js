import axios from "axios";

export const geUsers = () => {
  return axios.get("/users", {
    params: {
      limit: 1000
    }
  });
};
