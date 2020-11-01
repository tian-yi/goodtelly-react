import axios from "axios";

export const signin = async ({ username, password }) => {
  const result = await axios.post("https://api.goodtelly.com/api/token/", {
    username,
    password,
  });

  return result;
};
