import React from "react";
import { useState } from "react";

export default function TextForm(props) {

    const handleUppercase =()=>{
        console.log("Handle uppercase clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log('on change')
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter your text')
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button onClick={handleUppercase} className="btn btn-primary">Convert to UpperCase</button>
    </div>
  );
}
