import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>If you want to try something different, you can make ramen yakisoba – boil your ramen for a few minutes, then drain it and fry it up with veggies and meat! FYI, you can make a really good yakisoba umami sauce with ketchup, Worcestershire sauce, soy sauce, and Sriracha! Get the full recipe here.</p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About;
