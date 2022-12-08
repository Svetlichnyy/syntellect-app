import React, { useState } from "react";

interface props {
  firstButtonName: string;
  secondButtonName: string;
  firstFunction: string;
  secondFunction: string;
}

function First({
  firstButtonName,
  secondButtonName,
  secondFunction,
  firstFunction,
}: props) {
  const [value, setValue] = useState("");

  let firstButtonClick = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (e.currentTarget.innerHTML === firstButtonName) {
      switch (firstFunction) {
        case "1":
          setValue("");
          break;
        case "2":
          setValue("Hello world!");
          break;
        case "3":
          if (!isNaN(Number(value))) {
            alert(value);
          }
          break;
        case "4":
          alert(value);
          break;
      }
    }
  };
  let secondButtonClick = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (e.currentTarget.innerHTML === secondButtonName) {
      switch (secondFunction) {
        case "1":
          setValue("");
          break;
        case "2":
          setValue("Hello world!");
          break;
        case "3":
          if (!isNaN(Number(value))) {
            alert(value);
          }
          break;
        case "4":
          alert(value);
          break;
      }
    }
  };
  let handleSet = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <form>
        <input type={"text"} value={value} onChange={handleSet} />
        <button onClick={firstButtonClick}>{firstButtonName}</button>
        <button onClick={secondButtonClick}>{secondButtonName}</button>
      </form>
    </div>
  );
}

export default First;
