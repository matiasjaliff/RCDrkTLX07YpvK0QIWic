import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import CartCard from "./CartCard";

const nonEmptyOrder = [
  {
    details: {
      id: "mediterranea",
      name: "Mediterránea",
      price: 1800,
      description:
        "Salsa de tomates italianos, mozzarella, tomates cherry, aceitunas negras, terminada con pimienta negra, oliva con ajo y pesto de albahaca.",
      ingredients: '["Aceitunas negras", "Pimienta negra", "Oliva con a…]',
      image: "mediterranea.png",
      slices: {
        1: [
          { active: true, name: "Aceitunas negras" },
          { active: true, name: "Pimienta negra" },
          { active: true, name: "Oliva con ajo" },
          { active: true, name: "Pesto de albahaca" },
        ],
        2: [
          { active: true, name: "Aceitunas negras" },
          { active: true, name: "Pimienta negra" },
          { active: true, name: "Oliva con ajo" },
          { active: true, name: "Pesto de albahaca" },
        ],
        3: [
          { active: true, name: "Aceitunas negras" },
          { active: true, name: "Pimienta negra" },
          { active: true, name: "Oliva con ajo" },
          { active: true, name: "Pesto de albahaca" },
        ],
        4: [
          { active: true, name: "Aceitunas negras" },
          { active: true, name: "Pimienta negra" },
          { active: true, name: "Oliva con ajo" },
          { active: true, name: "Pesto de albahaca" },
        ],
      },
    },
    quantity: 1,
  },
  {
    details: {
      id: "pepperoni",
      name: "Pepperoni",
      price: 1750,
      description:
        "Salsa de tomates italianos, mozzarella y auténtico pepperoni. Terminada con pimienta negra y oliva.",
      ingredients: ["Pepperoni", "Pimienta negra", "Oliva"],
      image: "pepperoni.png",
      slices: {
        1: [
          { active: true, name: "Pepperoni" },
          { active: true, name: "Pimienta negra" },
          { ative: true, name: "Oliva" },
        ],
        2: [
          { active: true, name: "Pepperoni" },
          { active: true, name: "Pimienta negra" },
          { ative: true, name: "Oliva" },
        ],
        3: [
          { active: true, name: "Pepperoni" },
          { active: true, name: "Pimienta negra" },
          { ative: true, name: "Oliva" },
        ],
        4: [
          { active: true, name: "Pepperoni" },
          { active: true, name: "Pimienta negra" },
          { ative: true, name: "Oliva" },
        ],
      },
    },
    quantity: 2,
  },
];
const itemFromOrder = nonEmptyOrder[0];

const mockedQuantityAndPriceTag = jest.fn();
const mockedSliceTag = jest.fn();
const mockedIngredientsDetail = jest.fn();

jest.mock("./QuantityAndPriceTag", () => (props) => {
  mockedQuantityAndPriceTag(props);
  return <div />;
});

jest.mock("./SliceTag", () => (props) => {
  mockedSliceTag(props);
  return <div />;
});

jest.mock("./IngredientsDetail", () => (props) => {
  mockedIngredientsDetail(props);
  return <div />;
});

it("renderizes correctly", () => {
  render(
    <CartCard item={itemFromOrder} order={nonEmptyOrder} setOrder={jest.fn()} />
  );

  const header = screen.getByText(itemFromOrder.details.name);
  expect(header).toBeInTheDocument();

  expect(mockedQuantityAndPriceTag).toHaveBeenCalledTimes(1);
  expect(mockedQuantityAndPriceTag).toHaveBeenCalledWith(
    expect.objectContaining({
      quantity: itemFromOrder.quantity,
      price: itemFromOrder.details.price,
    })
  );

  expect(mockedSliceTag).toHaveBeenCalledTimes(4);
  
  expect(mockedIngredientsDetail).toHaveBeenCalledTimes(4);
  [1, 2, 3, 4].forEach((slice) =>
    expect(mockedIngredientsDetail).toHaveBeenCalledWith(
      expect.objectContaining({
        ingredientsSelection: itemFromOrder.details.slices[slice],
      })
    )
  );

  const subtotal = screen.getByText(/\$/);
  expect(subtotal).toHaveTextContent("Subtotal: $ 1800");
});
