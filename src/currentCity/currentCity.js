import React from "react";
import Display from "./cityDisplay";
import Rows from "./threeRows.js";

export default function City() {
  return (
    <div className="city">
      <Display />
      <br />
      <br />
      <Rows />
    </div>
  );
}
