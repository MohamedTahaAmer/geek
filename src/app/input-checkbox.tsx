"use client";
import React, { useState } from "react";

const InputCheckbox = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    cpp: false,
    javascript: false,
    python: false,
    java: false,
    react: false,
    angular: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  return (
    <div>
      <div>Languages and frameworks known?</div>
      <div className="flex flex-col">
        <label>
          <input
            type="checkbox"
            name="cpp"
            checked={selectedOptions.cpp}
            onChange={handleChange}
          />
          C++
        </label>
        <label>
          <input
            type="checkbox"
            name="javascript"
            checked={selectedOptions.javascript}
            onChange={handleChange}
          />
          JavaScript
        </label>
        <label>
          <input
            type="checkbox"
            name="python"
            checked={selectedOptions.python}
            onChange={handleChange}
          />
          Python
        </label>
        <label>
          <input
            type="checkbox"
            name="java"
            checked={selectedOptions.java}
            onChange={handleChange}
          />
          Java
        </label>
        <label>
          <input
            type="checkbox"
            name="react"
            checked={selectedOptions.react}
            onChange={handleChange}
          />
          React
        </label>
        <label>
          <input
            type="checkbox"
            name="angular"
            checked={selectedOptions.angular}
            onChange={handleChange}
          />
          Angular
        </label>
      </div>
    </div>
  );
};

export default InputCheckbox;
