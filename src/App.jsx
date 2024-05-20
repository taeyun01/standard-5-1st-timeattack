import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onPlusButton = () => {
    setCount((prev) => Number(prev) + Number(input));
  };
  const onMinusButton = () => {
    setCount((prev) => Number(prev) - Number(input));
  };
  const onResetButton = () => {
    setCount(0);
    setInput(0);
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={input} onChange={onInputChange} /> 만큼을{" "}
        <button onClick={onPlusButton}>더할게요</button>{" "}
        <button onClick={onMinusButton}>뺄게요</button>
        <button onClick={onResetButton}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}
