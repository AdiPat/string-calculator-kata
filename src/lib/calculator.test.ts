describe("Calculator Tests", () => {
  it("should be importable", async () => {
    const calculator = await import("./calculator");
    expect(calculator).toBeDefined();
  });

  it("should have a method add", async () => {
    const calculator = await import("./calculator");
    expect((calculator as any).add).toBeDefined();
  });

  it("should return 0 for an empty string", async () => {
    const calculator = await import("./calculator");
    expect((calculator as any).add("")).toBe(0);
  });

  it("should return 0 for null", async () => {
    const calculator = await import("./calculator");
    expect((calculator as any).add(null)).toBe(0);
  });

  it("adds 2 numbers", async () => {
    const calculator = await import("./calculator");
    const result = calculator.add("10,30");
    expect(result).toBe(40);
  });

  it("adds 3 numbers", async () => {
    const calculator = await import("./calculator");
    const result = calculator.add("1,2,3");
    expect(result).toBe(6);
  });

  it("adds 1,5,7 to equal 13", async () => {
    const calculator = await import("./calculator");
    const result = calculator.add("1,5,7");
    expect(result).toBe(13);
  });
});
