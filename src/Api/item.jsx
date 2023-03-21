import axios from "axios";

export function getItem(id) {
  return axios.get(`/items/${id}`).then((res) => {
    return res.data;
  });
}

export function getItemList({ userId, category }) {
  return axios
    .get(`/items?userid=${userId}&category=${category}`)
    .then((res) => {
      return res.data;
    });
}
