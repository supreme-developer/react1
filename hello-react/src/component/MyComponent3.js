import React from "react";

function MyComponent({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      <h1>3. 조건부 렌더링</h1>
      {isSpecial ? <b>*</b> : null}
      안녕하세요 {name}
    </div>
  );
}

MyComponent.defaultProps = {
  name: "이름없음"
};

export default MyComponent;
