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

  const values = numbers.split(",");

  const result = values.reduce((acc, value) => {
    return acc + parseInt(value);
  }, 0);

  return result;
}

export { add };
