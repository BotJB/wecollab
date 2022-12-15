import React from 'react'

function About() {
  return (
    <div className='about-container'>
        <h1>Team Members of this project</h1>
        <div className="all-cards">
        <div className="card">
            <img src='/jasjot.jpg' alt="" />
            <div className="card-info">
            <h4>Jasjot singh</h4>
            <a href="mailto:bains0964@gmail.com">bains0964@gmail.com</a>
            </div>
        </div>
        <div className="card">
            <img src='/heena.jpg' alt="" />
            <div className="card-info">
            <h4>Heena Vinayak</h4>
            <a href="mailto:Heenavinayak91@gmail.com">Heenavinayak91@gmail.com</a>
            </div>
        </div>
        <div className="card">
            <img src='/rahima.jpg' alt="" />
            <div className="card-info">
            <h4>Rahima Sultana</h4>
            <a href="mailto: rahimas@ymail.com
"> rahimas@ymail.com
</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About