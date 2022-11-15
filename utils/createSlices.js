function createSlices(item, numberOfSlices) {
  const baseSlice = item.ingredients.map((ingredient) => {
    return {
      name: ingredient,
      active: true,
    };
  });
  const slices = {};
  for (let i = 1; i <= numberOfSlices; i++) {
    slices[i] = baseSlice;
  }
  return { ...item, slices: slices };
}

module.exports = { createSlices };
