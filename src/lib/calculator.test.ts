describe("Calculator Tests", () => {
  it("should be importable", async () => {
    const calculator = await import("./calculator");
    expect(calculator).toBeDefined();
  });

  it("should have a method add", async () => {
    const calculator = await import("./calculator");
    expect((calculator as any).add).toBeDefined();
  });
});
