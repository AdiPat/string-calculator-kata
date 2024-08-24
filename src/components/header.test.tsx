import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Header Tests", () => {
  it("renders a header with a title", async () => {
    const header = await import("./header");
    const { Header } = header;
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
