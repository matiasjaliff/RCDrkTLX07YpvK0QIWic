import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'

import Credit from "./Credit";

it("renderizes", () => {
  render(<Credit />);
  expect(screen.getByText("Tu saldo actual es de")).toBeInTheDocument();
  expect(screen.getByText(/\$/)).toBeInTheDocument();
  expect(screen.getByText("Recargar")).toBeInTheDocument();
});

it("click recargar", async () => {
  const user = userEvent.setup();
  
  const initialCredit = 1000;
  const mockHandler = jest.fn();

  render(<Credit credit={initialCredit} setCredit={mockHandler} />);

  const recargar = screen.getByText("Recargar");

  expect(mockHandler).not.toHaveBeenCalled();

  await user.click(recargar);
  await user.click(recargar);
  await user.click(recargar);
  await user.click(recargar);

  expect(mockHandler).not.toHaveBeenCalled();

  await user.click(recargar);

  expect(mockHandler).toHaveBeenCalledTimes(1);

  await user.click(recargar);

  expect(mockHandler).toHaveBeenCalledTimes(1);

  await user.click(recargar);
  await user.click(recargar);
  await user.click(recargar);
  await user.click(recargar);

  expect(mockHandler).toHaveBeenCalledTimes(2);
});
