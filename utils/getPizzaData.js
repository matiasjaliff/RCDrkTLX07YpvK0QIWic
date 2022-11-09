const menu = require("../db/data.json");

async function getPizzaData(id) {
  return menu.find((pizza) => pizza.id === id);
}

module.exports = { getPizzaData };
