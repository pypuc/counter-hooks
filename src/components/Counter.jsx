import { useState } from "react";
import { Button } from "./CounterBtn";

export const Counter = () => {
  // const [number, setNumber] = useState(0)

  const addNumber = () => {
  setNumber(number + 1);
};

const minusNumber = () => {
  setNumber(number - 1);
};

return (
  <>
    <h2>Значення: {number}</h2>
    <Button changeNumber={addNumber} titleBtn="Додати" />
    <Button changeNumber={minusNumber} titleBtn="Відняти" />
  </>
);

};
