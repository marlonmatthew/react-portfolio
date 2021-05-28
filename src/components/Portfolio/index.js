import React from "react";
import "../../index.css";

function Portfolio() {
  return (
    <div>
      <section className="container">
        <div className="row">
          <div className="col-md-auto mt-2 mb-4">
            <h2 className="header">My Portfolio</h2>
            <ul className="list-unstyled">
              <li className="media">
                <img
                  src="img/bubbles-ems.jpg"
                  className="mr-3"
                  alt="Bubbles EMS"
                  id="thumbnail"
                ></img>
                <div className="media-body">
                  <h5 className="mt-0 mb-1" id="project">
                    Bubbles EMS
                  </h5>
                  <p id="description">
                    Dashboard for managing employee accounts, time, pay, and
                    schedules. Core responsibilities: Front-end design and CSS
                    styling, database schema, application concept. Technologies
                    used: HTML, CSS, Bootstrap, JavaScript, MongoDB, React. UCR
                    Coding Bootcamp project #3.
                  </p>
                  <p>
                    <a
                      href="https://peaceful-castle-79357.herokuapp.com/"
                      id="portfolio-link"
                      target="_blank"
                    >
                      Deployed Site
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/marlonmatthew/Portal-Matriarch"
                      id="portfolio-link"
                      target="_blank"
                    >
                      GitHub Repo
                    </a>
                  </p>
                </div>
              </li>
              <li className="media">
                <img
                  src="img/gentle-drinkers.jpg"
                  className="mr-3"
                  alt="Gentle Drinkers"
                  id="thumbnail"
                ></img>
                <div className="media-body">
                  <h5 className="mt-0 mb-1" id="project">
                    Gentle Drinkers
                  </h5>
                  <p id="description">
                    Filter through a database of eclectic craft beers to aid the
                    selection process. Core responsibilities: Front-end design
                    and CSS styling, database schema. Technologies used: HTML,
                    CSS, Bootstrap, JavaScript, MySQL, Node.js, Express,
                    Handlebars.js. UCR Coding Bootcamp project #2.
                  </p>
                  <p>
                    <a
                      href="https://gentledrinkers.herokuapp.com/"
                      id="portfolio-link"
                      target="_blank"
                    >
                      Deployed Site
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/marlonmatthew/beerapp"
                      id="portfolio-link"
                      target="_blank"
                    >
                      GitHub Repo
                    </a>
                  </p>
                </div>
              </li>
              <li className="media">
                <img
                  src="img/will-it-stream.jpg"
                  className="mr-3"
                  alt="Will It Stream"
                  id="thumbnail"
                ></img>
                <div className="media-body">
                  <h5 className="mt-0 mb-1" id="project">
                    willitstream.com
                  </h5>
                  <p id="description">
                    Search for movies or series and see where they are currently
                    streaming. Core responsibilities: Implemented API calls on
                    the back-end, fixed design issues on the front end, and
                    finalized overall design and functionality. Technologies
                    used: OMDb and uTelly APIs, HTML, CSS, Bootstrap,
                    JavaScript, JQuery, Ajax. UCR Coding Bootcamp project #1.
                  </p>
                  <p>
                    <a
                      href="https://willitstream.com"
                      id="portfolio-link"
                      target="_blank"
                    >
                      https://willitstream.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/marlonmatthew/will-it-stream"
                      id="portfolio-link"
                      target="_blank"
                    >
                      GitHub Repo
                    </a>
                  </p>
                </div>
              </li>
              <li className="media">
                <img
                  src="img/weather-dashboard.jpg"
                  className="mr-3"
                  alt="Weather Dashboard"
                  id="thumbnail"
                ></img>
                <div className="media-body">
                  <h5 className="mt-0 mb-1" id="project">
                    Weather Dashboard
                  </h5>
                  <p id="description">
                    Search any city in the world to retrieve current weather
                    conditions as well as a 5-day forecast. Technologies used:
                    HTML, CSS, Javascript, JQuery, OpenWeather API. UCR Coding
                    Bootcamp assignment #6.
                  </p>
                  <p>
                    <a
                      href="https://marlonmatthew.github.io/weather-dashboard/"
                      id="portfolio-link"
                      target="_blank"
                    >
                      Deployed Site
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/marlonmatthew/weather-dashboard"
                      id="portfolio-link"
                      target="_blank"
                    >
                      GitHub Repo
                    </a>
                  </p>
                </div>
              </li>
              <li className="media mb-1">
                <img
                  src="img/daily-planner.jpg"
                  className="mr-3"
                  alt="Daily Planner UCA6"
                  id="thumbnail"
                ></img>
                <div className="media-body">
                  <h5 className="mt-0 mb-1" id="project">
                    Daily Planner UCA6
                  </h5>
                  <p id="description">
                    A 24 hour daily planner with an Amazon theme. Technologies
                    used: HTML, CSS, Javascript, JQuery. UCR Coding Bootcamp
                    assignment #5.
                  </p>
                  <p>
                    <a
                      href="https://marlonmatthew.github.io/daily-planner-uca6/"
                      id="portfolio-link"
                      target="_blank"
                    >
                      Deployed Site
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/marlonmatthew/daily-planner-uca6"
                      id="portfolio-link"
                      target="_blank"
                    >
                      GitHub Repo
                    </a>
                  </p>
                </div>
              </li>
              <li className="media mb-4">
                <img
                  src="img/ricemusic.jpg"
                  className="mr-3"
                  alt="ricemusic.net"
                  id="thumbnail"
                ></img>
                <div className="media-body">
                  <h5 className="mt-0 mb-1" id="project">
                    ricemusic.net
                  </h5>
                  <p id="description">
                    San Diego bassist Rice Enright has been a staple in the
                    music community for many years. It was important to create
                    this site with WordPress and Elementor, which gave him the
                    capability to make future updates and edits on his own. Many
                    of the services he provides as a music professional in the
                    community are featured here. Technologies used: Wordpress,
                    Elementor.
                  </p>
                  <p>
                    <a
                      href="https://www.ricemusic.net"
                      id="portfolio-link"
                      target="_blank"
                    >
                      https://www.ricemusic.net
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <h2 className="header">Technical Skills</h2>
          <p>Languages: Javascript ES6+, CSS3, HTML5, SQL, NoSQL</p>
          <p>
            Skills: GitHub, MySQL, MongoDB, ReactJS, Node.js, Express,
            Handlebars.js, JQuery, Bootstrap, SEO, Copywriting, Hootsuite,
            MailChimp, WordPress, Elementor, Adobe Photoshop, Microsoft Office
          </p>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
