import React, { Component } from "react";
import MyComponent1 from "./component/MyComponent1";
import MyComponent2 from "./component/MyComponent2";

class App extends Component {
  render() {
    return (
      <div className="my-div">
        <MyComponent1 />
        <MyComponent2 name="송타" age={30} />
      </div>
    );
  }
}

export default App;
