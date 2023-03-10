import axios from "axios";

export default function getUser(id) {
  return axios.get(`/users/${id}`).then((res) => {
    return res.data;
  });
}
