import React from 'react'
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faAtom } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const coinIcon = <FontAwesomeIcon icon={faCoins} />
const atomIcon = <FontAwesomeIcon icon={faAtom} />

function header() {
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove('open');
    }
    return (
        <div className="nav-main">
            <header className="header">
                <div className="brand">
                    <img src="/images/menu7.png" alt="logo" onClick={openMenu}></img>
                    <Link to="/"><img src="/images/logo.png" alt="logo"></img></Link>
                    <Link to="/"><h1>Attendence</h1></Link>
                </div>
                <div className="header-links">
                    <img src="/images/menu1.png" alt="logo"></img>
                    <img src="/images/menu2.png" alt="logo"></img>
                    <img src="/images/menu3.png" alt="logo"></img>
                    <h1><span>{coinIcon}</span>  50.000</h1>
                    <img src="/images/menu4.png" alt="logo"></img>
                    <h1>{atomIcon}</h1>
                </div>
            </header>
            <aside className="sidebar">
                <button className="sidebar-close-button" onClick={closeMenu}>X</button>
                <ul>
                    <li>
                        <img src="/images/menu5.png" alt="menu"></img>
                    </li>
                    <li>
                    <img src="/images/menu8.png" alt="menu"></img>
                    </li>
                    <li>
                    <img src="/images/menu9.png" alt="menu"></img>
                    </li>
                    <li>
                    <img src="/images/menu6.png" alt="menu"></img>
                    </li>
                    <li>
                    <img src="/images/logo.png" alt="menu"></img>
                    </li>
                    <li>
                    <img src="/images/menu10.png" alt="menu"></img>
                    </li>
                </ul>
            </aside>
        </div>

    )
}

export default header
