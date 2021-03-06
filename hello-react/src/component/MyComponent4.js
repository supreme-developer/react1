import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
    //업데이트 함수를 사용한다.
    //업데이트 함수는 최적화와 관련이 있다.
  };

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
    <div>
      <h1>4. state와 useState</h1>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
