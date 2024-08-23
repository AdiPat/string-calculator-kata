describe("Calculator Tests", () => {
  it("should be importable", async () => {
    const calculator = await import("./calculator.ts");
    expect(calculator).toBeDefined();
  });
});
