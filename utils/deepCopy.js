function deepCopy(item) {
  return JSON.parse(JSON.stringify(item));
}

module.exports = { deepCopy };
