import React, { useState } from 'react';
import myImage from '../assets/selfie.png'
import './About.css'

function AboutMe () {
	return (
		<section className='about-me-section'>
		<h2>About me</h2>
		<h3>Hi, I'm Alina!</h3>
        <div className='description'>
		<img className='selfie' src={myImage} alt="" />
        </div>
		<div className='about-me'>
        <p> And I'm a junior front-end developer with a year of intensive training at NBI Handelsakademi in Gothenburg. I'm passionate about crafting beautiful, functional websites using Vanilla JS and React. My skills also extend to working with databases, APIs, and testing. I even have experience in UX design with tools like Figma.</p>
        <br/>
        <p>Outside of coding, I'm a total nerd who loves video games, fantasy books, nature, photography, and mindfulness. Let's create something amazing together!</p>

		</div>
        </section>
	) 
}

export default AboutMe