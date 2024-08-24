import { Result } from "./result";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Result Tests", () => {
  it("renders a result with a number", async () => {
    const { container } = render(<Result result={0} />);
    expect(container).toMatchSnapshot();
  });

  it("renders a result with a number", async () => {
    const { container } = render(<Result result={0} />);
    const result = screen.getByText(/Result: 0/i);
    expect(result).toBeInTheDocument();
  });
});
