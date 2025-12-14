export const Button = ({ titleBtn, changeNumber }) => {
  return (
    <button onClick={changeNumber}>{titleBtn}</button>
  );
};
