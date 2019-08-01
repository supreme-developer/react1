import React, { Component } from "react";
import MyComponent1 from "./component/MyComponent1";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";
import MyComponent4 from "./component/MyComponent4";
import MyComponent5 from "./component/MyComponent5";

class App extends Component {
  render() {
    return (
      <div className="my-div">
        <MyComponent1 />
        <MyComponent2 name="송타" age={30} />
        <MyComponent3 name="react" color="red" isSpecial={true} />
        <MyComponent3 name="react" color="blue" isSpecial={false} />
        <MyComponent4 />
        <MyComponent5 />
      </div>
    );
  }
}

export default App;
