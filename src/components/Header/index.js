import React from "react";
import "../../index.css";

function Header() {
  return (
    <div className="header">
      <header className="jumbotron jumbotron-fluid" id="jumbo">
        <div className="container">
          <div className="row">
            <div className="col-md-auto mt-2 mb-4">
              <img
                className="mar_image"
                src="img/marlon-matthew.jpg"
                alt="Web developer Marlon Matthew"
              ></img>
            </div>
            <div className="col-md-auto" id="jumbo_text">
              <h1 className="display-3 jumbotron-header">Marlon Matthew</h1>
              <h1 className="display-4 jumbotron-header">Web Developer</h1>
              <p className="lead">from San Diego, California</p>
              <div>
                <a href="mailto: marlonbmatthew@gmail.com">
                  <button
                    type="button"
                    className="btn btn-light bi bi-envelope-fill"
                    id="headerButton"
                  ></button>
                </a>
                <a href="tel: 619-504-4166">
                  <button
                    type="button"
                    className="btn btn-light bi bi-phone-fill"
                    id="headerButton"
                  ></button>
                </a>
                <a
                  href="https://www.linkedin.com/in/marlonmatthew/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="btn btn-light bi bi-linkedin"
                    id="headerButton"
                  ></button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1B2L7Cx5O0_S1k8BaoIwdv0wktcLSn5Ou/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="btn btn-light bi bi-file-person-fill"
                    id="headerButton"
                  ></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
