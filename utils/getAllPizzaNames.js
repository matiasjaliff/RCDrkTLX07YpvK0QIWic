const menu = require("../db/data.json");

async function getAllPizzaNames() {
  return menu.map((pizza) => ({
    params: {
      id: pizza.id,
    },
  }));
}

module.exports = { getAllPizzaNames };
