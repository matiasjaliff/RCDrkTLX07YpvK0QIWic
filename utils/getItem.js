const menu = require("../db/data.json");

async function getItem(id) {
  return menu.find((item) => item.id === id);
}

module.exports = { getItem };
