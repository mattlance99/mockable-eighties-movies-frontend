import React from "react";
import Teenwolf from "../Teenwolf.jpg";

const About = () => (
  <div>
    <h1>About the site</h1>
    <img src={Teenwolf} className="Teenwolft" alt="Teenwolf" />
    <p>
      Ah, Eighties movies. The plot holes were enormous, the story lines were
      sappy, and most conflicts between the hero and the bad guy were resolved
      with
      <br />a punch to the face. Three decades have passed and you'll find its
      quite painful watching these movies with your kids. Try explaining to them
      why people laughed in the <br /> theater when the Nerds (Revenge of the
      Nerds) smoked weed with a faculty member and installed video cameras into
      the sorority house without their knowledge or consent.
      <br />
      <br />
      Anyway, enter an 80's movie and rip it apart. We love plots that make no
      sense, events that would <br /> never in a million years happen and
      anything else that makes the movie ridiculous.
    </p>
  </div>
);

export default About;
