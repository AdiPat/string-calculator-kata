import { Button, Input } from "@nextui-org/react";

export function UserInput() {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div
        className="flex flex-col justify-center items-center"
        style={{ width: "70%" }}
      >
        <label className="text-white text-lg mb-4" htmlFor="numbers">
          Enter string to compute sum:
        </label>
        <Input placeholder="Enter comma separated numbers" />
        <Button size="lg" color="primary" className="mt-4">
          Calculate
        </Button>
      </div>
    </div>
  );
}
