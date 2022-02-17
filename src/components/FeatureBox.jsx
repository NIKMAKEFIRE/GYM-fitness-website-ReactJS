import React from 'react'

function FeatureBox(props) {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.image} />
            </div>
            <div className="a-b-text">
                <h2 className="feature__box-text">{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consecores, quam!</p>
            </div>
        </div>
    )
}

export default FeatureBox