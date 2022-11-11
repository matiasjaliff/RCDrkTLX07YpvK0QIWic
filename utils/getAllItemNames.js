const menu = require("../db/data.json");

async function getAllItemNames() {
  return menu.map((item) => ({
    params: {
      id: item.id,
    },
  }));
}

module.exports = { getAllItemNames };
