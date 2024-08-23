/**
 * Adds a string of numbers separated by commas or a custom delimiter
 *
 * @param numbers string of numbers separated by commas or a custom delimiter
 * @returns sum of the numbers
 */
function add(numbers: string): number {
  if (!numbers || numbers === "") {
    return 0;
  }

  // replace newlines with ,
  numbers = numbers.replace(/\n/g, ",");

  const values = numbers.split(",");

  const result = values.reduce((acc, value) => {
    const valueAsNumber = parseInt(value);

    if (isNaN(valueAsNumber)) {
      throw new Error("Invalid number found: " + value);
    }

    if (valueAsNumber < 0) {
      throw new Error("Negatives not allowed");
    }

    return acc + valueAsNumber;
  }, 0);

  return result;
}

export { add };
