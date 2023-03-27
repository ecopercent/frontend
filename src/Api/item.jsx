import axios from "axios";

export function getItem(id) {
  return axios.get(`/items/${id}`).then((res) => {
    return res.data;
  });
}

export function patchItem({
  itemId,
  itemImage,
  itemNickname,
  itemType,
  itemBrand,
  itemPrice,
  itemPurchaseDate,
}) {
  return axios
    .patch(`/items/${itemId}`, {
      image: itemImage,
      nickname: itemNickname,
      type: itemType,
      brand: itemBrand,
      price: itemPrice,
      purchaseDate: itemPurchaseDate,
    })
    .then((res) => {
      return res.data;
    });
}

export function getItemList(userId, category) {
  return axios
    .get(`/items?userId=${userId}&category=${category}`)
    .then((res) => {
      return res.data;
    });
}

export function deleteItem(itemId) {
  return axios.delete(`/items/${itemId}`).then((res) => {
    return res.data;
  });
}

export function upUsageCount(itemId) {
  return axios.patch(`/items/${itemId}/up`).then((res) => {
    console.log("hi", res.data);
    return res.data;
  });
}

export function getTitleItem(userId, category) {
  return axios.get(`/users/${userId}/title-${category}`).then((res) => {
    return res.data;
  });
}

export function patchTitleItem({ userId, itemId, category }) {
  return axios
    .patch(`/users/${userId}/items/${itemId}/title-${category}`)
    .then((res) => {
      return res.data;
    });
}
