import "./App.css";
import { useState } from "react";
import { Header } from "./Header";
import { Info } from "./Info";
import { Input } from "./Input";

const App = () => {
  const [amount, setAmount] = useState(130);
  const [name, setName] = useState("");
  const increment = () => {
    setAmount(amount + 1);
  };
  const decrement = () => {
    setAmount(amount - 1);
  };

  const receiveData = (name) => {
    setName(name);
  };
  return (
    <div>
      <Header amount={amount} />
      <hr />
      <h1>Preet</h1>
      <Info name={name} />
      <Input receiveData={receiveData} />
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </div>
  );
};

export default App;
