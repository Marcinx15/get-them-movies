import React, {Component} from 'react'
import "./Header.css"
import Logo from "../../img/movieDBlogo.png"
import {Link} from 'react-router-dom'

class Header extends Component {


    render() {
        return (
            <div className="header">

                <div className="nav">
                    <ul>
                        <li>
                            <div className="logo">
                                <a className="logo" href="https://www.themoviedb.org/">
                                    <img className="DBlogo" src={Logo} alt="The Movie DB"/>
                                </a>
                            </div>
                        </li>
                        <li>
                            <a className="dropdown">SEARCH</a>
                            <ul className="submenu">
                                <li>
                                    <Link to="/">
                                        <span>MOVIES</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/search_shows">
                                        <span>TV SHOWS</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/search_people">
                                        <span>PEOPLE</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="dropdown">RANKINGS</a>
                        </li>
                        <li>
                            <a className="dropdown">
                                ABOUT US
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header