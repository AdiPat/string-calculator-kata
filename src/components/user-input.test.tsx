import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UserInput } from "./user-input";

describe("UserInput Tests", () => {
  it("renders a user input with a label, input and button", async () => {
    const { container } = render(
      <UserInput
        value={""}
        setResult={function (value: number): void {
          throw new Error("Function not implemented.");
        }}
        setValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        setShowResult={function (showResult: boolean): void {
          throw new Error("Function not implemented.");
        }}
        setError={function (error: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders a user input with a label", async () => {
    const { container } = render(
      <UserInput
        value={""}
        setResult={function (value: number): void {
          throw new Error("Function not implemented.");
        }}
        setValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        setShowResult={function (showResult: boolean): void {
          throw new Error("Function not implemented.");
        }}
        setError={function (error: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const label = screen.getByText(/Enter string to compute sum:/i);
    expect(label).toBeInTheDocument();
  });

  it("renders a user input with a placeholder", async () => {
    const { container } = render(
      <UserInput
        value={""}
        setResult={function (value: number): void {
          throw new Error("Function not implemented.");
        }}
        setValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        setShowResult={function (showResult: boolean): void {
          throw new Error("Function not implemented.");
        }}
        setError={function (error: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const input = screen.getByPlaceholderText(/Enter comma separated numbers/i);
    expect(input).toBeInTheDocument();
  });

  it("renders a user input with a button", async () => {
    const { container } = render(
      <UserInput
        value={""}
        setResult={function (value: number): void {
          throw new Error("Function not implemented.");
        }}
        setValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        setShowResult={function (showResult: boolean): void {
          throw new Error("Function not implemented.");
        }}
        setError={function (error: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const button = screen.getByText(/Calculate/i);
    expect(button).toBeInTheDocument();
  });
});
