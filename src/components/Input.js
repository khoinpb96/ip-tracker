import "./Input.scss";
import arrow from "../image/icon-arrow.svg";
import { useState } from "react";

export default function Input({ setIpInput }) {
  const [inputValue, setInputValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    setIpInput(inputValue);
  }
  return (
    <form className="input" onSubmit={submitHandler}>
      <input
        type="text"
        id="url"
        placeholder="Search for any IP address or domain"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <div className="enterBtn" onClick={submitHandler}>
        <img src={arrow} alt="" />
      </div>
    </form>
  );
}
