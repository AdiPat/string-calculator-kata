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

  const customDelimiters = extractDelimiters(numbers);
  let mode = "add";

  console.log({ customDelimiters });

  if (customDelimiters.length > 1) {
    numbers = numbers.split("\n")[1];
    // logic that we want
    customDelimiters.forEach((d: string) => {
      numbers = numbers.replaceAll(d, ",");
    });
  } else {
    if (customDelimiters.length == 1) {
      try {
        numbers = numbers.split("\n")[1];
        numbers = numbers.replaceAll(customDelimiters[0], ",");
        let { mode: newMode } = processDelimiter(numbers);
        mode = newMode;
      } catch (err) {
        let { mode: newMode, numbers: numbersWithDelimiters } =
          processDelimiter(numbers);
        mode = newMode;
        numbers = numbersWithDelimiters;
      }
    } else {
      let { mode: newMode, numbers: numbersWithDelimiters } =
        processDelimiter(numbers);
      mode = newMode;
      numbers = numbersWithDelimiters;
    }
  }

  // replace newlines with ,
  numbers = numbers.replace(/\n/g, ",");

  const values = numbers.split(",");

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

const extractDelimiters = (numbers: string): string[] => {
  const delimiters: string[] = [];

  if (!numbers.startsWith("//")) {
    return [];
  }

  const numbersWithoutSlashes = numbers.slice(2);
  const delimitersPortion = numbersWithoutSlashes.split("\n")[0];

  const regex = /\[([^\]]+)\]/g;

  let match;

  while ((match = regex.exec(delimitersPortion)) !== null) {
    // The captured delimiter is in the first group (index 1)
    delimiters.push(match[1]);
  }

  return delimiters;
};

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

export { add, extractDelimiters };
