import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to UpperCase", "success")
    }
    const handleloClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to LowerCase", "success")
    }

    const handleClearClick = () => {

        let newText = '';
        setText(newText);
        props.showAlert(" Text Cleared", "success")
    }

    const handleOnChange = (event) => {

        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 " onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleloClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} character</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview "}</p>

            </div>
        </>
    )
}
