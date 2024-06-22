import React from "react";

const InputRadio = () => {
  return (
    <div className="flex flex-col pb-4">
      <div className="text-lg font-semibold">
        Would you recommend GeekforGeeks to a friend?
      </div>
      <div className="flex flex-col space-y-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="description"
            value="Student"
            className="form-radio h-4 w-4 text-indigo-600"
          />
          <span className="ml-2">yes</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="description"
            value="Graduate"
            className="form-radio h-4 w-4 text-indigo-600"
          />
          <span className="ml-2">No</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="description"
            value="Professional"
            className="form-radio h-4 w-4 text-indigo-600"
          />
          <span className="ml-2">Other</span>
        </label>
      </div>
    </div>
  );
};

export default InputRadio;
