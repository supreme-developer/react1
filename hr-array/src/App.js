import React from "react";
import UserList1 from "./Component/UserList";
import UserComponent from "./Component/UserComponent";

function App() {
  return (
    <div className="App">
      <h1>1. 일반 배열</h1>
      <UserList1 />
      <h1>2. map/배열 추가/삭제/수정</h1>
      <UserComponent />
    </div>
  );
}

export default App;
