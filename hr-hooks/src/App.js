import React from 'react';
import InputSample from './components/InputSample';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div >
      <h1>1. useRef를 사용한 focus 초기화</h1>
      <InputSample></InputSample>
      <h1>2. 여러가지 Hook 함수 사용 예</h1>
      <UserComponent></UserComponent>
    </div>
  );
}

export default App;
