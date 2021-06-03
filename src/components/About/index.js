import React from "react";
import "../../index.css";

function About() {
  return (
    <div>
      <section className="container">
        <div className="row">
          <div className="col-sm mb-3 mt-4">
            <h2 className="header">
              <u>About Me</u>
            </h2>
            <p>
              My first exposure to web design was in 1995 at a computer camp
              where I began learning HTML and basic graphic design. Soon after,
              I took a web design class in high school where I continued to
              develop these skills. Creating websites for personal endeavors was
              something I continued to enjoy doing throughout the years.
            </p>
            <p>
              In 2016, I completed an internship with Linguistic Horizons where
              I learned how to use Wordpress and the many different plugins
              available. Shortly after, I took my first client in the local
              music community. Utilizing both Wordpress and Elementor, I built a
              website that helped him to increase his student base, receive new
              gig offers, and gain higher google search rankings.
            </p>
            <p>
              I have completed a certification for a web development bootcamp in
              2021 through the University of California, Riverside. My knowledge
              and skills as a full stack web developer have greatly expanded. I
              am excited to put my newly acquired skillset to use in the
              professional world. My portfolio showcases many of the assignments
              and projects that I submitted throughout the bootcamp. Outside of
              the bootcamp, my portfolio also showcases freelance work I
              completed.
            </p>
          </div>
          <div className="col-md-auto mb-4">
            <img
              className="mar_image mt-4"
              src="img/marlon-matthew-02.jpg"
              alt="Web developer Marlon Matthew"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
