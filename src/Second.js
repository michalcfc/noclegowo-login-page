import React from "react";
import Form from "./Form";
import Photo from "./Photo";

const Second = props => {
  return (
    <>
      <div className="logo">
        {" "}
        <img alt="logo" src="/logo.png" />
      </div>
      <div className="login">
        <Photo photo={props.photo} background={props.background} />
        <Form formLeft={props.formLeft} />
      </div>
    </>
  );
};

export default Second;
