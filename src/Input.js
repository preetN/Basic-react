import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { setvalue } from "./nameSlice";
export const Input = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState("");
  const handleOnchange = (event) => {
    // console.log(event.target.value);
    // destructuring
    const { value } = event.target;
    console.log(value);
    setForm(value);
  };

  const handleOnsubmit = (event) => {
    event.preventDefault();

    dispatch(setvalue(form));
  };
  return (
    <form onSubmit={handleOnsubmit}>
      <input
        type="text"
        onChange={handleOnchange}
        placeholder="Type something here.."
      />
      <button type="submit">Submit</button>
      <p>{form}</p>
    </form>
  );
};
