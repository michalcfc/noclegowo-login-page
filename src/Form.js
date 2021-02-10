import React from "react";

const Form = props => {
  return (
    <>
      <div
        className={
          "d-flex align-items-center " +
          (props.formLeft ? "ml-4 " : "justify-content-center ") +
          (props.active !== "third" ? "col-xl-6 " : "col-xl-4 ") +
          (props.active === "third" ? "box-shadow" : "")
        }
      >
        <div className="login__content">
          <div className="login__header mb-4">
            <h3>Panel gospodarza obiektu</h3>
            <h6>Witaj ponownie! Miło Cię znowu widzieć ;)</h6>
          </div>
          <fieldset>
            <div className="form-group">
              <label htmlFor="login_login">Adres e-mail:</label>
              <input type="text" placeholder="E-mail" id="login_login" />
            </div>
            <div className="form-group">
              <label htmlFor="login_pass">Hasło:</label>
              <input type="text" placeholder="Hasło" id="login_pass" />
            </div>
          </fieldset>
          <a className="btn btn-success btn-block" href="http://noclegowo.pl">
            Zaloguj się
          </a>
          <div className="mt-4">
            <small>
              Nie masz jeszcze konta?{" "}
              <a href="https://oferta.noclegowo.pl/">Dodaj obiekt.</a>
            </small>
            <br />
            <small>
              Potrzebujesz pomocy?{" "}
              <a href="https://www.noclegowo.pl/info/kontakt">Napisz do nas.</a>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
