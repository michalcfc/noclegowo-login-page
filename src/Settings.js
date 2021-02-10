import React from "react";
import Select from "./Select";

const Settings = props => {
  return (
    <>
      <div className="settings">
        <div className="settings__content">
          <div
            className="settings__hide"
            onClick={() => props.handleSettings()}
          >
            X
          </div>
          <Select handleSelect={props.handleSelect} />
          <div className="d-flex align-items-center settings__change">
            <label className="switch">
              <input
                type="checkbox"
                checked={props.background}
                onClick={() => props.handleBackground()}
              />
              <div />
            </label>
            <div className="click ml-2">szare lub białe tło</div>
          </div>
          {props.active === "second" && (
            <div className="d-flex align-items-center settings__change">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={props.formLeft}
                  onClick={() => props.handleFormLeft()}
                />
                <div />
              </label>
              <div className="click ml-2">formularz do lewej</div>
            </div>
          )}
          {props.active !== "third" && (
            <div className="d-flex align-items-center settings__change">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={props.photo}
                  onClick={() => props.handlePhoto()}
                />
                <div />
              </label>
              <div className="click ml-2">z grafiką lub zdjęciem</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Settings;
