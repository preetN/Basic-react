import "./App.css";
import React from "react";
import { Header } from "./Header";
import { Info } from "./Info";
import { Input } from "./Input";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./amountSlice";
const App = () => {
  const dispatch = useDispatch();

  const incrementMe = () => {
    dispatch(increment());
  };
  const decrementMe = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <Header />
      <hr />
      <h1>Preet</h1>
      <Info />
      <Input />
      <button onClick={incrementMe}>++</button>
      <button onClick={decrementMe}>--</button>
    </div>
  );
};

export default App;
