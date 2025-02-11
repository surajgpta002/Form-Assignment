import { useState } from "react";

export default function DynamicInputFields() {
  const [inputs, setInputs] = useState([""]); // Initial input field

  const addInputField = () => {
    setInputs([...inputs, ""]); // Add a new input field
  };

  return (
    <div className="flex flex-col items-center gap-3 p-6">
      {inputs.map((_, index) => (
        <div key={index} className="flex flex-col w-80">
          <label className="mb-1 text-gray-700 font-medium">
            Label {index + 1}
          </label>
          <input
            type="text"
            placeholder={`Input ${index + 1}`}
            className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      ))}

      <button
        onClick={addInputField}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Add Label & Input
      </button>
    </div>
  );
}
