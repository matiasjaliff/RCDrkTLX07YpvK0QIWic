function detailBuilder(ingredientsSelection) {
  let detail;
  const inactive = ingredientsSelection.filter(
    (ingredient) => !ingredient.active
  );
  if (!inactive.length) {
    detail = "Con todo!";
  } else {
    detail = `Sin ${inactive[0].name.toLowerCase()}`;
    if (inactive.length > 1) {
      detail += ` ni ${inactive[1].name.toLowerCase()}`;
    }
  }
  return detail;
}

export default function IngredientsDetail({ ingredientsSelection }) {
  return <p>{detailBuilder(ingredientsSelection)}</p>;
}
