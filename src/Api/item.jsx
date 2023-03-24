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
    .get(`/items?userid=${userId}&category=${category}`)

    .then((res) => {
      return res.data;
    });
}

export function deleteItem(id) {
  return axios.delete(`/items/${id}`).then((res) => {
    return res.data;
  });
}
