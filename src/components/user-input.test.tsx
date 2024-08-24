import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UserInput } from "./user-input";

describe("UserInput Tests", () => {
  it("renders a user input with a label, input and button", async () => {
    const { container } = render(<UserInput />);
    expect(container).toMatchSnapshot();
  });

  it("renders a user input with a label", async () => {
    render(<UserInput />);
    const label = screen.getByText(/Enter string to calculate sum:/i);
    expect(label).toBeInTheDocument();
  });

  it("renders a user input with a placeholder", async () => {
    render(<UserInput />);
    const input = screen.getByPlaceholderText(/Enter comma separated numbers/i);
    expect(input).toBeInTheDocument();
  });

  it("renders a user input with a button", async () => {
    render(<UserInput />);
    const button = screen.getByText(/Calculate/i);
    expect(button).toBeInTheDocument();
  });
});
