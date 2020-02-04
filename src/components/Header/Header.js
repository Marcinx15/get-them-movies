import React, {Component} from 'react'
import "./Header.css"
import Logo from "../../img/movieDBlogo.png"
import {Link, withRouter} from 'react-router-dom'
import auth from "../Auth/Auth"

class Header extends Component {
    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken');
        auth.logout()
        this.props.history.push(`/`)
    };


    render() {
        const loginRegLink = (
            <ul className="submenu">
                <li>
                    <Link to="/login">
                        <span>LOGIN</span>
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        <span>REGISTER</span>
                    </Link>
                </li>
            </ul>
        );

        const userLink = (
            <ul className="submenu">
                <li >
                    <Link to="/profile">
                        <span>USER</span>
                    </Link>
                </li>
                <li >
                    <a href="" onClick={this.logOut.bind(this)}>
                        <span>LOGOUT</span>
                    </a>
                </li>
            </ul>
        );

        const support = (
            <li>
                <a className="dropdown">
                    SUPPORT
                </a>
                <ul className="submenu">
                    <li>
                        <Link to="/add_movie">
                            <span>ADD MOVIE</span>
                        </Link>
                    </li>
                </ul>
            </li>
        );




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
                        {localStorage.usertoken ? support : ""}
                        <li>
                        <a className="dropdown">
                            ACCOUNT
                        </a>
                        {localStorage.usertoken ? userLink : loginRegLink}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);