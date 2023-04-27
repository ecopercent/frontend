import axios from "axios";

export function getItem(id) {
  return axios.get(`/items/${id}`).then((res) => {
    return res.data;
  });
}
export function postItem({
  itemImage,
  itemNickname,
  itemCategory,
  itemType,
  itemBrand,
  itemPrice,
  itemPurchaseDate,
}) {
  return axios
    .post(`/items`, {
      image: itemImage,
      nickname: itemNickname,
      category: itemCategory,
      type: itemType,
      brand: itemBrand,
      price: itemPrice,
      purchaseDate: itemPurchaseDate,
    })
    .then((res) => {
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

export function getItemList(category) {
  return axios.get(`/items?category=${category}`).then((res) => {
    return res.data;
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
    return res.data;
  } catch (e) {
    return null;
  }
}

export function patchTitleItem({ itemId, category }) {
  return axios.patch(`/items/${itemId}/title-${category}`).then((res) => {
    return res.data;
  });
}
