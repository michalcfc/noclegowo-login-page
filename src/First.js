import React from "react";
import Form from "./Form";
import Photo from "./Photo";

const First = props => {
  return (
    <>
      <div className="logo">
        {" "}
        <img alt="logo" src="/logo.png" />
      </div>
      <div className="login">
        <Form />
        <Photo photo={props.photo} />
      </div>
    </>
  );
};

export default First;
