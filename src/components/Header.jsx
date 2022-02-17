import React from 'react'

function Header() {
    return (
        <div id="main">
            <div className="header-heading">
                <div className="header-text">
                    <h2 className="h2">НАЧНИ СВОЙ</h2>
                    <h1 className="h1"><span className="span">FITNESS</span> С НАМИ</h1>
                    <p className="details">Прокачай свое тело с профессиональным подходом</p>
                </div>
            </div>
            <div className="header-btns">
                <a href="#" className="header-btn">Записаться</a>
            </div>
        </div>
    )
}

export default Header