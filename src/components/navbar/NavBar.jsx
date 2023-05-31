import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "/gpt-logo.png";
import { useState, useEffect } from "react";

const Menu = ({ handleClick }) => {
    return (
        <>
            <li><a href="#home" onClick={handleClick}>Home</a></li>
            <li><a href="#whatis" onClick={handleClick}>About</a></li>
            <li><a href="#samples" onClick={handleClick}>Samples</a></li>
            <li><a href="#methods" onClick={handleClick}>Methods</a></li>
            <li><a href="#about" onClick={handleClick}>FAQ</a></li>
            <li><a href="#limitations" onClick={handleClick}>Limitations</a></li>
            <li><a href="#try" onClick={handleClick}>Try ChatGPT</a></li>
        </>
    )
}

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false)
        }
    }

    const handleClick = () => {
        setToggle(false);
    }

    useEffect(() => {
        if (toggle) setScroll(true);
        else if (!toggle && window.scrollY < 50) setScroll(false);
        window.addEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <nav className={`navbar ${scroll ? "bg-nav" : ""}`}>
            <div className={"navbar-links"}>
                <div className="navbar-links-logo">
                    <a href="#home" onClick={handleClick}><img src={logo} alt="Chat GPT Logo" /></a>
                </div>
                <ul className="navbar-links-container">
                    <Menu />
                </ul>
            </div>
            <div className="navbar-menu">
                <div className="menu-order">
                    <div className="navbar-links-logo">
                        <a href="#home" onClick={handleClick}><img src={logo} alt="Chat GPT Logo" /></a>
                    </div>
                    {toggle ? <RiCloseLine color="#fff" size={27} onClick={() => setToggle(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />}
                </div>
                {toggle && (
                    <div className="navbar-menu-container scale-up-ver-top">
                        <ul className={`navbar-menu-container-links ${scroll ? "bg-nav-navbar-menu-container-links" : ""}`}>
                            <Menu handleClick={handleClick} />
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
