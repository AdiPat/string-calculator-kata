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

  if (numbers.startsWith("//")) {
    const customDelimiter = numbers[2];

    if (numbers[3] === "\n") {
      numbers = numbers.substring(4);
    } else {
      numbers = numbers.substring(3);
    }

    numbers = numbers.replaceAll(customDelimiter, ",");
  }

  // replace newlines with ,
  numbers = numbers.replace(/\n/g, ",");

  const values = numbers.split(",");

  let invalidValueError = "";
  let negativeValueError = "";

  const result = values.reduce((acc, value) => {
    const valueAsNumber = parseInt(value);

    if (isNaN(valueAsNumber)) {
      if (invalidValueError === "") {
        invalidValueError = "Invalid number found: " + value;
      } else {
        invalidValueError += ", " + value;
      }
    }

    if (valueAsNumber < 0) {
      if (negativeValueError === "") {
        negativeValueError = "Negative numbers are not allowed: " + value;
      } else {
        negativeValueError += ", " + value;
      }
    }

    return acc + valueAsNumber;
  }, 0);

  if (invalidValueError) {
    throw new Error(invalidValueError);
  }

  if (negativeValueError) {
    throw new Error(negativeValueError);
  }

  return result;
}

export { add };
