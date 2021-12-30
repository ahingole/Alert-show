import React, { useState } from "react";
import { ShowColor } from "./ShowColor";
import './App.css';

function App() {
  const [name, setName] = useState("Akash");
  const [color, setcolor] = useState({ show: false, msg: "this is color", type: "" });
  // const [count, setcount] = useState(0)
  const [num, setnum] = useState(1)

  // const arr = ["success", "danger", "success", "danger", "success", "danger", "success", "danger", "success"]



  const showAlert = (show = false, msg = "", type = "") => {

    setcolor({ show, msg, type })

  }



  const handleClick = () => {

    setName("practice time");
    // setcolor({ show: true, msg: "this is msg", type: arr[num + 1] })

    if (num % 2 === 0) {
      // setcolor({ show: true, msg: "odd number", type: "danger" })
      showAlert(true, "Odd Number", "danger")

    }
    else {
      // setcolor({ show: true, msg: "even number", type: "success" })
      showAlert(true, "even number", "success")


    }
    setnum(num + 1)

  };
  return (

    <React.Fragment>
      <h1>{name}</h1>

      <h1 className={`alert-${color.type}`}>{num}</h1>
      {color.show && <ShowColor {...color} />}

      <button type="button" onClick={handleClick}>
        Change
      </button>
    </React.Fragment>

  );
}
export default App;
