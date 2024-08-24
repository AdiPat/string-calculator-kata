import { add } from "@/lib/calculator";
import { Button, Input } from "@nextui-org/react";

interface UserInputProps {
  value: string;
  setResult: (value: number) => void;
  setValue: (value: string) => void;
  setShowResult: (showResult: boolean) => void;
  setError: (error: string) => void;
}

export function UserInput({
  value,
  setResult,
  setValue,
  setShowResult,
  setError,
}: UserInputProps) {
  const onCalculate = () => {
    try {
      setShowResult(false);
      const result = add(value);
      setResult(result);
      setShowResult(true);
    } catch (error) {
      setResult(0);
      setError("Error when computing sum. Please check your input.");
      setShowResult(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div
        className="flex flex-col justify-center items-center"
        style={{ width: "70%" }}
      >
        <label className="text-white text-lg mb-4" htmlFor="numbers">
          Enter string to compute sum:
        </label>
        <Input
          placeholder="Enter comma separated numbers"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          size="lg"
          color="primary"
          className="mt-4"
          onClick={onCalculate}
        >
          Calculate
        </Button>
      </div>
    </div>
  );
}
