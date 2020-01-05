import React, { Component } from 'react';
import "./Author.css"

export default class Author extends Component {
    render() {
        return (
            <div className="author">
                <div className="author-image">
                    <img src={this.props.photo} alt="avatar" className="photo" />
                </div>
                <br/>
                <span className="author-name">{this.props.name}</span>
                <br/>
                <br/>
                <div className="author-links">
                    <a href={this.props.linkedin}>
                        <i className="fab fa-linkedin"/>
                    </a>
                    <a href={this.props.facebook}>
                        <i className="fab fa-facebook"/>
                    </a>
                    <a href={this.props.github}>
                        <i className="fab fa-github"/>
                    </a>
                    <a href={this.props.instagram}>
                        <i className="fab fa-instagram"/>
                    </a>
                    <a href={this.props.spotify}>
                        <i className="fab fa-spotify"/>
                    </a>
                </div>
            </div>
        );
    }
}