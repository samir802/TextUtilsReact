import React from "react";

function Alert(props) {
  const capital = () => {
    const lower = props.message.type.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.message && (
      <div
        className={`alert alert-${props.message.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capital(props.message.type)}</strong>: {props.message.msg}
      </div>
    )
  );
}

export default Alert;
