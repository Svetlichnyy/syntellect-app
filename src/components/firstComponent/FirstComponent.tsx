import React, { useState } from "react";
import FirstOption from "./FirstOption";
import SecondOption from "./SecondOption";

function FirstComponent() {
  const [value, setValue] = useState("1");
  const [firstFunction, setFirstFunction] = useState("1");
  const [secondFunction, setSecondFunction] = useState("2");
  const [firstButtonName, setFirstButtonName] = useState("clear");
  const [secondButtonName, setSecondButtonName] = useState("change text");

  return (
    <div>
      <p> Choose the variant of buttons !</p>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="1">first</option>
        <option value="2">second</option>
      </select>
      <p> Choose the function of the first button !</p>
      <select
        value={firstFunction}
        onChange={(e) => setFirstFunction(e.target.value)}
      >
        <option value="1">clear</option>
        <option value="2">Hello World!</option>
        <option value="3">alert if number</option>
        <option value="4">alert</option>
      </select>
      <p> Choose the function of the second button !</p>
      <select
        value={secondFunction}
        onChange={(e) => setSecondFunction(e.target.value)}
      >
        <option value="1">clear</option>
        <option value="2">Hello World!</option>
        <option value="3">alert if number</option>
        <option value="4">alert</option>
      </select>
      <p>text in first button :</p>
      <input
        value={firstButtonName}
        onChange={(e) => setFirstButtonName(e.currentTarget.value)}
      />
      <p>text in second button :</p>
      <input
        value={secondButtonName}
        onChange={(e) => setSecondButtonName(e.currentTarget.value)}
      />
      {value === "1" ? (
        <FirstOption
          firstButtonName={firstButtonName}
          secondButtonName={secondButtonName}
          firstFunction={firstFunction}
          secondFunction={secondFunction}
        />
      ) : (
        <SecondOption
          firstButtonName={firstButtonName}
          secondButtonName={secondButtonName}
          firstFunction={firstFunction}
          secondFunction={secondFunction}
        />
      )}
    </div>
  );
}

export default FirstComponent;
