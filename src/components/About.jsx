import React from 'react'
import {Link} from "react-router-dom"
import{HiOutlineArrowNarrowRight} from 'react-icons/hi'
const About = () => {
  return (
    <section className = "about" id = "about">
        <div className="container">
           <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we are serious about is food.</p>
            </div>
            <p className="mid">
            Food is our common ground, a universal experience. It is not just fuel for the body but nourishment for the soul. It tells stories of cultures, traditions, and memories, bringing people together across tables, continents, and generations. The act of cooking is an art, blending flavors, colors, and textures into something that can comfort, excite, or transport us to a different time and place. In every bite, there is history, love, and a piece of someone’s heart. To eat well is to live well, and to share a meal is to share a moment of life’s simplest and greatest pleasures.
            </p>
            <Link to = {"/"}>Explore Menu<span>
                <HiOutlineArrowNarrowRight />
                </span></Link>
           </div>
           <div className="banner">
            <img src = "./about.png" alt="about"/>
           </div>
        </div>
          
    </section>
  )
}

export default About

