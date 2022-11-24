import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import IngredientsDetail from "./IngredientsDetail";

const fullInput = [
  { active: true, name: "Aceitunas negras" },
  { active: true, name: "Pimienta negra" },
  { active: true, name: "Oliva con ajo" },
  { active: true, name: "Pesto de albahaca" },
];
const notFullInput = [
  { active: false, name: "Aceitunas negras" },
  { active: false, name: "Pimienta negra" },
  { active: true, name: "Oliva con ajo" },
  { active: true, name: "Pesto de albahaca" },
];

it("renderizes correctly with all ingredients", () => {
  render(<IngredientsDetail ingredientsSelection={fullInput} />);
  const detail = screen.getByText(/con todo/i);
  expect(detail).toBeInTheDocument();
});

it("renderizes correctly without some ingredients", () => {
  render(<IngredientsDetail ingredientsSelection={notFullInput} />);
  const detail = screen.getByText(/sin/i);
  expect(detail).toBeInTheDocument();
});