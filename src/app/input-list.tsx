import React from "react";

const InputList = () => {
  return (
    <div className="flex flex-col pb-4">
      <label className="mb-2 block text-lg font-semibold">
        What option best describes you?
      </label>
      <select className="p-2">
        <option value="Student" className="p-2">
          Student
        </option>
        <option value="Graduate" className="p-2">
          Graduate
        </option>
        <option value="Professional" className="p-2">
          Professional
        </option>
        <option value="Other" className="p-2">
          Other
        </option>
      </select>
    </div>
  );
};

export default InputList;
