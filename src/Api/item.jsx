import axios from "axios";

export default function getItem(id) {
  return axios.get(`/items/${id}`).then((res) => {
    return res.data;
  });
}
