import React from "react";
import { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = () => {
  const [objectState, setObjectState] = useState({
    text: "",
    price: 0,
    today: new Date(),
  });
  // const [text, setText] = useState("");
  // const [price, setPrice] = useState(0);
  // const [date, setDate] = useState(null);

  const changeTextHandler = (event) => {
    // setText(event.target.value)
    setObjectState((preveState) => ({
      ...preveState,
      text: event.target.value,
    }));
  };
  const changePriceHandler = (event) => {
    // setPrice(event.target.value);
    setObjectState((preveState) => ({
      ...preveState,
      price: event.target.value,
    }));
  };
  const changeDateHandler = (event) => {
    // setDate(event.target.value);
    setObjectState((preveState) => ({
      ...preveState,
      date: event.target.value,
    }));
  };
  const ClickHandler = () => {
    console.log(objectState.text, objectState.price, objectState.date);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    console.log(objectState.text, objectState.price, objectState.date);

    setObjectState({
      text: "",
      price: 0,
      today: new Date(),
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-payment__controls">
        <div
          className="new-payment__control"
          // value={text}
          value={objectState.text}
          onChange={changeTextHandler}
        >
          <label>이름</label>
          <input type="text" />
        </div>
        <div
          className="new-payment__control"
          // value={price}
          value={objectState.price}
          onChange={changePriceHandler}
        >
          <label>금액</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div
          className="new-payment__control"
          // value={date}
          value={objectState.date}
          onChange={changeDateHandler}
        >
          <label>날짜</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-payment__actions">
        <button type="submit">결제 추가</button>
      </div>
    </form>
  );
};

export default PaymentForm;
