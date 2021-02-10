import React from "react";
import Form from "./Form";

const Third = props => {
  return (
    <>
      <div className="logo__center">
        {" "}
        <img alt="logo" src="/logo.png" />
      </div>
      <div className="height d-flex align-items-center justify-content-center">
        <Form active={props.active} />
      </div>
    </>
  );
};

export default Third;
