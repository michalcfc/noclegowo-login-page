import React from "react";

const Select = props => {
  return (
    <>
      <div className="mt-4">
        <label>Zmień widok:</label>
        <select onChange={e => props.handleSelect(e)}>
          <option value="first">Formularz po lewej</option>
          <option value="second">Formularz po prawej</option>
          <option value="third">Formularz po środku</option>
        </select>
      </div>
    </>
  );
};

export default Select;
