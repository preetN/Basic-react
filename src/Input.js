import { useState } from "react";

export const Input = ({ receiveData }) => {
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
    receiveData(form);
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
