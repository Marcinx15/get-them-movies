import React, {Component} from 'react';
import "./Info.css"

export default class About extends Component {
    render() {
        return (
            <div className="image">
                <div className="top">
                    <div className="text">
                        Project developed for class
                        <br/>
                        <span className="bold">'Programming for the WWW'</span>
                        <br/>
                        <br/>
                        It was created by:
                        <br/>
                        <span className="bold">
                                Marcin Kurek
                                <br/>
                                Dawid Szczerba
                            </span>
                        <br/>
                        <br/>
                        <span className="bold">'GET-THEM-MOVIES'  </span>
                        is a react app consuming
                        <br/>
                        The Movie Database (TMDb) API.
                        <br/>
                        <br/>
                        Developed using technologies such as:
                        <br/> HTML5, CSS3, React.js

                    </div>
                </div>
            </div>
        );
    }
}