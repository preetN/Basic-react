import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
export const Info = () => {
  const name = useSelector((state) => state.nameReducer.value);
  return (
    <p>
      <span>
        {name}
        <br />
      </span>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius laboriosam
      repudiandae fuga ipsum? Aliquid blanditiis dolor suscipit praesentium,
      tenetur eos mollitia rerum! Ducimus libero nostrum sint ipsum ad eum
      repellat!
    </p>
  );
};
