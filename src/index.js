import React, {  useState } from "react";
import ReactDOM from "react-dom";
import Context from "./Context.js";
import HelloWorld from "./components/HelloWorld"


let rootdiv = document.getElementById("root");

const Provider = props => {
  const [state, setState] = useState({ message: 'hello world' });
  return (
    <Context.Provider value={{state, setState}}>
      {props.children}
    </Context.Provider>
  );
};


const App = () => (
  <Provider>
    <div style={{ textAlign: "center" }}>
     <HelloWorld/>
    </div>
  </Provider>
);

rootdiv ? ReactDOM.render(<App />, rootdiv) : false;
