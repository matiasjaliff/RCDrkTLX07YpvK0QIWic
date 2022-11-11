function createSlices(item, numberOfSlices) {
  const baseSlice = {};
  item.ingredients.forEach((ingredient) => (baseSlice[ingredient] = true));
  const slices = {};
  for (let i = 1; i <= numberOfSlices; i++) {
    slices[i] = baseSlice;
  }
  return { ...item, slices: slices };
}

module.exports = { createSlices };
