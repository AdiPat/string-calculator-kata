type Mode = "add" | "multiply";

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

  let { mode, numbers: numbersWithDelimiters } = processDelimiter(numbers);

  // replace newlines with ,
  numbersWithDelimiters = numbersWithDelimiters.replace(/\n/g, ",");

  const values = numbersWithDelimiters.split(",");

  if (mode == "multiply") {
    return handleMultiply(values);
  }

  const { invalidValueError, negativeValueError, result } = handleAdd(values);

  if (invalidValueError) {
    throw new Error(invalidValueError);
  }

  if (negativeValueError) {
    throw new Error(negativeValueError);
  }

  return result;
}

const processDelimiter = (
  numbers: string
): { mode: Mode; numbers: string; customDelimiter: string } => {
  let mode: Mode = "add";
  let customDelimiter = "";

  if (numbers.startsWith("//")) {
    const customDelimiter = numbers[2];

    if (customDelimiter === "*") {
      mode = "multiply";
    }

    if (numbers[3] === "\n") {
      numbers = numbers.substring(4);
    } else {
      numbers = numbers.substring(3);
    }

    numbers = numbers.replaceAll(customDelimiter, ",");
  }

  return { mode, numbers, customDelimiter };
};

const handleMultiply = (values: string[]): number => {
  let result = 1;

  values.forEach((value) => {
    result *= parseInt(value);
  });

  return result;
};

const handleAdd = (
  values: string[]
): {
  result: number;
  invalidValueError: string;
  negativeValueError: string;
} => {
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

  return {
    result,
    invalidValueError,
    negativeValueError,
  };
};

export { add };
