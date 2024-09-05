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
    const result = calculator.add("");
    expect(result).toBe(0);
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

  it("correctly adds arbitrary number of positive numbers", async () => {
    const calculator = await import("./calculator");
    const values = Array.from(
      { length: Math.floor(Math.random() * 10000) },
      (_, i) => Math.floor(Math.random() * 100)
    );
    const expected = values.reduce((acc, value) => acc + value, 0);
    const result = calculator.add(values.join(","));
    expect(result).toBe(expected);
  });

  it("throws exception for negative numbers", async () => {
    const calculator = await import("./calculator");
    expect(() => calculator.add("-1,4,-3,5")).toThrow();
  });

  it("supports newline as delimiter", async () => {
    const calculator = await import("./calculator");
    const result = calculator.add("5,3,1\n2\n3");
    expect(result).toBe(14);
  });

  it("returns correct result when there are spaces in the input", async () => {
    const calculator = await import("./calculator");
    const result = calculator.add("1, 2, 3");
    expect(result).toBe(6);
  });

  it("returns correct result when there are spaces and newlines in the input", async () => {
    const calculator = await import("./calculator");
    const result = calculator.add("1, 2\n3,4\n5\n6, 7");
    expect(result).toBe(28);
  });

  it("throws an exception when the input is invalid", async () => {
    const calculator = await import("./calculator");
    expect(() => calculator.add("1, 2,, 3,")).toThrow();
  });

  it("returns the correct result when there is a custom delimiter", async () => {
    const calculator = await import("./calculator");
    const result = calculator.add("//;\n1;2;3");
    expect(result).toBe(6);
  });

  it("returns the correct response is delimiter is present without newline", async () => {
    const calculator = await import("./calculator");
    const result = calculator.add("//;1;2;3");
    expect(result).toBe(6);
  });

  it("returns the correct result by multiplication when custom delimiter is *", async () => {
    const calculator = await import("./calculator");
    const result = calculator.add("//*\n2*3*4");
    expect(result).toBe(24);
  });
});
