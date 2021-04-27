import React from "react";
import "../../index.css";

function Header() {
  return (
    <div className="header">
      <header class="jumbotron jumbotron-fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-auto mt-2 mb-4">
              <img
                class="mar_image"
                src="img/marlon-matthew.jpg"
                alt="Web developer Marlon Matthew"
              ></img>
            </div>
            <div class="col-md-auto" id="jumbo_text">
              <h1 class="display-3 jumbotron-header">Marlon Matthew</h1>
              <h1 class="display-4 jumbotron-header">Web Developer</h1>
              <p class="lead">from San Diego, California</p>
              <div>
                <a href="mailto: marlonbmatthew@gmail.com">
                  <button
                    type="button"
                    class="btn btn-light bi bi-envelope-fill"
                  ></button>
                </a>
                <a href="tel: 619-504-4166">
                  <button
                    type="button"
                    class="btn btn-light bi bi-phone-fill"
                  ></button>
                </a>
                <a
                  href="https://www.linkedin.com/in/marlonmatthew/"
                  target="_blank"
                >
                  <button
                    type="button"
                    class="btn btn-light bi bi-linkedin"
                  ></button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1ra0CVGRRbU2U6afapvVvmKnFT1fkHeJY/view?usp=sharing"
                  target="_blank"
                >
                  <button
                    type="button"
                    class="btn btn-light bi bi-file-person-fill"
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
