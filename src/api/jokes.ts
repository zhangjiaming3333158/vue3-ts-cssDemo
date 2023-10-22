import request from "../utils/request";

export const getJokes = () => {
  return request({
    url: "https://icanhazdadjoke.com/",
    method: "get",
  });
};