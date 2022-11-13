import data from "../db/data.json";

import { createSlices } from "./createSlices";

function getFullMenu() {
  return data.map((item) => createSlices(item, 4));
}

function getAllItemIds() {
  return data.map((item) => ({
    params: {
      id: item.id,
    },
  }));
}

function getItem(id) {
  const foundItem = data.find((item) => item.id === id);
  return createSlices(foundItem, 4);
}

module.exports = { getFullMenu, getAllItemIds, getItem };
