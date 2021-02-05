import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Form = () => {
  const defaultOptions = {
    color1: "black",
    fontSize1: "8",
    vAlign1: "left",
    hAlign1: "top",
    color2: "black",
    fontSize2: "8",
    vAlign2: "left",
    hAlign2: "top",
  };
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [options, setOptions] = useState(defaultOptions);

  const handleInputChange = (e) => {
    e.target.name === "input1"
      ? setInput1(e.target.value)
      : setInput2(e.target.value);
  };
  const handleOptionsChange = (e) => {
    console.log(e.target);
    setOptions({ ...options, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("inputs", input1, input2);

    if (input1 === "" && input2 === "") toast.warn("Text is required");

    console.log(input1, input2, options);
  };
  const baseForm = (type) => {
    return (
      <form className="flex space-y-3 w-84 flex-col py-5 bg-gray-100 text-gray-600">
        <label htmlFor="" className="font-bold px-2">
          {`Text ${type}`}
        </label>
        <input
          type="text"
          className="mx-2 py-2 px-2"
          placeholder="Text content..."
          onChange={handleInputChange}
          name={`input${type}`}
        />
        <div className="flex align-center justify-between px-2">
          <label htmlFor="cars">Color:</label>
          <select
            onChange={handleOptionsChange}
            className="w-24"
            name={`color${type}`}
          >
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
        <div className="flex align-center justify-between px-2">
          <label htmlFor="cars">Font Size:</label>
          <select
            onChange={handleOptionsChange}
            className="w-24"
            name={`fontSize${type}`}
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
            <option value="128">128</option>
          </select>
        </div>
        <div className="flex align-center justify-between px-2">
          <label htmlFor="cars">Vertical Align:</label>
          <select
            onChange={handleOptionsChange}
            className="w-24"
            name={`vAlign${type}`}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
        <div className="flex align-center justify-between px-2">
          <label htmlFor="cars">Horizontal Align:</label>
          <select
            onChange={handleOptionsChange}
            className="w-24"
            name={`hAlign${type}`}
          >
            <option value="top">Top</option>
            <option value="middle">Middle</option>
            <option value="bottom">Bottom</option>
          </select>
        </div>
        {type === 2 ? (
          <button
            onClick={onSubmit}
            type="submit"
            className="bg-blue-400 text-white w-full py-2"
          >
            Submit
          </button>
        ) : null}
      </form>
    );
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {baseForm(1)}
      {baseForm(2)}
    </div>
  );
};

export default Form;
