import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Total from "./Total";

const emptyOrder = [];
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
          '{active: true, name: "Aceitunas negras"}',
          '{active: true, name: "Pimienta negra"}',
          '{active: true, name: "Oliva con ajo"}',
          '{active: true, name: "Pesto de albahaca"}',
        ],
        2: [
          '{active: true, name: "Aceitunas negras"}',
          '{active: true, name: "Pimienta negra"}',
          '{active: true, name: "Oliva con ajo"}',
          '{active: true, name: "Pesto de albahaca"}',
        ],
        3: [
          '{active: true, name: "Aceitunas negras"}',
          '{active: true, name: "Pimienta negra"}',
          '{active: true, name: "Oliva con ajo"}',
          '{active: true, name: "Pesto de albahaca"}',
        ],
        4: [
          '{active: true, name: "Aceitunas negras"}',
          '{active: true, name: "Pimienta negra"}',
          '{active: true, name: "Oliva con ajo"}',
          '{active: true, name: "Pesto de albahaca"}',
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
          '{active: true, name: "Pepperoni"}',
          '{active: true, name: "Pimienta negra"}',
          '{active: true, name: "Oliva"}',
        ],
        2: [
          '{active: true, name: "Pepperoni"}',
          '{active: true, name: "Pimienta negra"}',
          '{active: true, name: "Oliva"}',
        ],
        3: [
          '{active: true, name: "Pepperoni"}',
          '{active: true, name: "Pimienta negra"}',
          '{active: true, name: "Oliva"}',
        ],
        4: [
          '{active: true, name: "Pepperoni"}',
          '{active: true, name: "Pimienta negra"}',
          '{active: true, name: "Oliva"}',
        ],
      },
    },
    quantity: 2,
  },
];
const initialCredit = 2000;

const routerPushMock = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: routerPushMock,
  }),
}));

beforeEach(() => {
  routerPushMock.mockClear();
})

it("renderizes correctly with empty order", () => {
  render(<Total order={emptyOrder} credit={initialCredit} />);

  const total = screen.getByText(/Total/i);
  expect(total).toHaveTextContent("$ 0");

  const confirmar = screen.getByText(/Confirmar/i);
  expect(confirmar).not.toHaveClass("button");
  expect(confirmar).toHaveClass("button_inactive");
});

it("renderizes correctly with non-empty order and insufficient credit", () => {
  render(<Total order={nonEmptyOrder} credit={initialCredit} />);

  const total = screen.getByText(/Total/i);
  expect(total).toHaveTextContent("$ 5300");

  const confirmar = screen.getByText(/Confirmar/i);
  expect(confirmar).not.toHaveClass("button");
  expect(confirmar).toHaveClass("button_inactive");
});

it("renderizes correctly with non-empty order and sufficient credit", async () => {
  const user = userEvent.setup();

  render(<Total order={nonEmptyOrder} credit={6000} />);

  const confirmar = screen.getByText(/Confirmar/i);
  expect(confirmar).toHaveClass("button");
  expect(confirmar).not.toHaveClass("button_inactive");

  await user.click(confirmar);

  expect(routerPushMock).toHaveBeenCalledTimes(1);
  expect(routerPushMock).toHaveBeenCalledWith("/confirmed");
});
