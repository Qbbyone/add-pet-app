import React, { useEffect, useState } from "react";
import Table from "./Table";

function Form() {
  const url = "http://localhost:5000/api";
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("cat");
  const [outputArr, setOutputArr] = useState([]);
  // validation
  const [inputInvalid, setInputInvalid] = useState(false);
  const [inputError, setInputError] = useState("Name is required");
  const [formValid, setFormValid] = useState(false);
  
  //fetch data using useEffect ??? => put data in outputArr
  useEffect(() => {
    fetch(url + "/getpets")
    .then((res) => res.json())
    .then((data) => setOutputArr(data))
  },[])



  useEffect(() => {
    if (inputError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [inputError]);

  const blurHandler = (e) => {
    setInputInvalid(true);
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
    if (!event.target.value) {
      setInputError("Name is required");
    } else {
      setInputError("");
    }
  }

  function handleSelectChange(event) {
    setSelectValue(event.target.value);
  }

  function sendValue() {
    fetch(url + "/addpet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: inputValue, species: selectValue }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOutputArr((prevArr) => [...prevArr, data]);
      });
    setInputValue("");
    setInputInvalid(false)
    setInputError("Name is required");
  }

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Add your pet</h1>
        <img src={process.env.PUBLIC_URL + "/img/paw.png"} alt="logo" />
      </div>
      <div className="form">
        {inputInvalid && inputError && (
          <div className="message">{inputError}</div>
        )}
        <input
          type="text"
          placeholder="Name"
          className="input"
          value={inputValue}
          onBlur={(e) => blurHandler(e)}
          onChange={handleInputChange}
        />
        <select
          value={selectValue}
          className="select custom-select"
          onChange={handleSelectChange}
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="other">Other</option>
        </select>

        <button disabled={!formValid} type="submit" className="btn btn-primary" onClick={sendValue}>
          Submit
        </button>
      </div>
      {outputArr.length ? <Table outputArr={outputArr}></Table> : <div>No pets yet</div>}
    </div>
  );
}

export default Form;
