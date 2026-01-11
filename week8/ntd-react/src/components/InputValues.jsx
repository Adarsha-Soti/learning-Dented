import React, { useRef, useState } from "react";

const InputValues = () => {
  const [title, setTitle] = useState("AGE App");

  // controlled way
  const [age, setAge] = useState(0);

  // uncontrolled ways
  const phoneRef = useRef(null);

  const calculateDOB = () => {
    let year = 2026 - age;

    alert(year);

    let phone = phoneRef.current.value;

    alert(phone);
  };
  return (
    <div>
      {title}
      <br />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(event) => {
          console.log(event.target.value);
          if (parseInt(event.target.value) <= 100) {
            setAge(parseInt(event.target.value));
          }

          if (event.target.value == "") {
            setAge(0);
          }
        }}
      />

      <input type="number" id="phone" ref={phoneRef} />
      <button onClick={calculateDOB}>Calculate</button>
    </div>
  );
};

export default InputValues;
