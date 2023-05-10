import axios from "axios";
import { base64ToDataUrl } from "../Utils/convert";

export function getItem(id) {
  return axios.get(`/items/${id}`).then((res) => {
    if (res.data.image) res.data.image = base64ToDataUrl(res.data.image);
    return res.data;
  });
}
export function postItem(formData) {
  return axios.post(`/items`, formData).then((res) => {
    return res.data;
  });
}

export function patchItem({ formData, id }) {
  return axios.patch(`/items/${id}`, formData).then((res) => {
    return res.data;
  });
}

export function getItemList(category) {
  return axios.get(`/items?category=${category}`).then((res) => {
    return res.data.map((item) => {
      if (item.image) {
        return {
          ...item,
          image: base64ToDataUrl(item.image),
        };
      }
      return item;
    });
  });
}

export function deleteItem(itemId) {
  return axios.delete(`/items/${itemId}`).then((res) => {
    return res.data;
  });
}

export function patchUsageCountUp(itemId) {
  return axios.patch(`/items/${itemId}/up`).then((res) => {
    return res.data;
  });
}

export async function getTitleItem(category) {
  try {
    const res = await axios.get(`/users/me/title-${category}`);
    if (res.data.image) res.data.image = base64ToDataUrl(res.data.image);
    return res.data;
  } catch (e) {
    return null;
  }
}

export function patchTitleItem({ itemId, category }) {
  return axios.patch(`/items/${itemId}/title-${category}`).then((res) => {
    if (res.data.image) res.data.image = base64ToDataUrl(res.data.image);
    return res.data;
  });
}
