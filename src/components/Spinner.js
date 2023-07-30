import React from "react";

export default function Spinner() {
  const style = {
    width: "4rem",
    height: "4rem",
    position: "absolute",
    top: "50%",
    left: "50%",
  }
  return (
    <div
      className="spinner-border text-center"
      style={style}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>

  )
}

