import React from 'react'
import aboutimage from '../img/about.png'

function About() {
    return (
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Qui animi, eveniet cupiditate
                    nesciunt aperiam illo amet
                    voluptatum alias hic exercitationem
                    sequi ipsam deleniti est sit.
                </p>
                <button>READ MORE</button>
                
            </div>
        </div>
    )
}

export default About