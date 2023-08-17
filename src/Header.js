//inline export
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
export const Header = () => {
  const amount = useSelector((state) => state.amountReducer.value);

  return (
    <>
      <h1>About me</h1>
      <p>Amount={amount}</p>
    </>
  );
};
