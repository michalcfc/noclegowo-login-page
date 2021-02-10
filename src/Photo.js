import React from "react";

const Photo = props => {
  return (
    <>
      <div
        className={
          props.photo
            ? "col-xl-6 hero"
            : "col-xl-6 d-flex align-items-center justify-content-center"
        }
      >
        {props.photo ? "" : <img alt="login" src="/login.svg" />}
      </div>
    </>
  );
};

export default Photo;
