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
                                <a className="logo" target="_blank" rel="noopener noreferrer" href="https://www.themoviedb.org/">
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
                            <ul className="submenu">
                                <li>
                                    <Link to="/top_movies">
                                        <span>TOP MOVIES</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/popular_movies">
                                        <span>POPULAR MOVIES</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/latest_movies">
                                        <span>LATEST MOVIES</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a className="dropdown">
                                ABOUT
                            </a>
                            <ul className="submenu">
                                <li>
                                    <Link to="/about_us">
                                        <span>ABOUT US</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/info">
                                        <span>INFO</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header