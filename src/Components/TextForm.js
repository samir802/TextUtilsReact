import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const setBold = () => {
    setIsBold((prev) => !prev);
    props.showAlert(isBold ? "Bold Disabled" : "Bold Enabled", "success");
  };

  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h2>Enter your text here</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="floatingTextarea"
            row="12"
            value={text}
            onChange={onChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary m-2"
          type="submit"
          onClick={handleUpperCase}
        >
          Change to Uppercase
        </button>

        <button
          className="btn btn-primary m-2"
          type="submit"
          onClick={handleLowerCase}
        >
          Change to Lowercase
        </button>

        <button
          className="btn btn-secondary m-2"
          type="submit"
          onClick={setBold}
        >
          <i className="fa-solid fa-bold"></i>
        </button>

        <button
          className="btn btn-danger m-2"
          type="submit"
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"} mt-3`}
      >
        <p className="mt-3">
          {text.split(" ").length - 1} words / {text.length} characters
        </p>
        <p>
          You can read this text in {0.008 * text.split(" ").length} minutes
        </p>
        <h2 className="mt-3">Preview</h2>

        <p
          className="preview-text p-3 bg-info bg-opacity-10 border border-info rounded-start rounded-end"
          style={{ fontWeight: isBold ? "bold" : "normal" }}
        >
          {text.length > 0 ? text : "Enter your text to preview it here."}
        </p>
      </div>
    </>
  );
}
