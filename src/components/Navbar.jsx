import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-scroll'


function Navbar() {

    const [nav, setNav] = React.useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (

        <nav className={nav ? "nav active" : "nav"}>
            <Link to="main" className="logo" smooth={true} duration={2000}>
                <img src={logo}/>
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="main" smooth={true} duration={1000}>Главная</Link></li>
                <li><Link to="features" smooth={true} duration={1000}>Услуги</Link></li>
                <li><Link to="offer" smooth={true} duration={1000}>Стоимость</Link></li>
                <li><Link to="about" smooth={true} duration={1000}>О нас</Link></li>
                <li><Link to="contact" smooth={true} duration={1000}>Контакты</Link></li>
            </ul>
        </nav>

    )
}

export default Navbar