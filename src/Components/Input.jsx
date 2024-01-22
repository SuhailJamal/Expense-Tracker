import "./Input.css";
import { useState } from "react";
import Main from "./Main";
export default function Input() {
  const [arr, setArr] = useState([]);
  const [priceInput, setPriceInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (nameInput && priceInput) {
      setArr((items) => [...items, { name: nameInput, price: priceInput }]);
      setNameInput("");
      setPriceInput("");
    }
  }
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          className="input"
          name="name"
          value={nameInput}
          autoComplete="name"
          onChange={(e) => setNameInput(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="input"
          price="price"
          autoComplete="price"
          value={priceInput}
          onChange={(e) => setPriceInput(e.target.value)}
        />
        <button type="submit" name = 'submitBtn' className="btn" onClick={handleClick}>
          Enter
        </button>
      </form>
      <Main ans={arr}/>
    </>
  );
}
