import React from "react";
import { useState } from "react";

export default function TextForm(props) {

    const handleUppercase =()=>{
        console.log("Handle uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowercase =()=>{
      console.log("Handle uppercase clicked")
      let newText = text.toLowerCase();
      setText(newText);
  }

  const handleClearText =()=>{
    console.log('handleClearText clicked')
    let newText = ('');
    setText(newText);
  }

    const handleOnChange = (event)=>{
        // console.log('on change')
        setText(event.target.value)
    }
    const [text, setText] = useState('')
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#171b2f'}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#171b2f'}}
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button onClick={handleUppercase} className="btn btn-primary">Convert to UpperCase</button>
      <button onClick={handleLowercase} className="btn btn-primary mx-2">Convert to LowerCase</button>
      <button onClick={handleClearText} className="btn btn-primary mx-2">Clear Text</button>
    </div>
    <div className="container my-2 mx-end" style={{color: props.mode==='dark'?'white':'#171b2f'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: 'Enter your text above in the text area to preview it here' }</p>
    </div>
    </>
  );
}
