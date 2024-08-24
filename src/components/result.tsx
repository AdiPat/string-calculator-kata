export function Result({ result }: { result: number }) {
  return (
    <div className="text-gray-800 text-center mt-4 bg-gray-400 rounded-lg p-4">
      <p className="text-xl font-bold">Result: {result}</p>
    </div>
  );
}
