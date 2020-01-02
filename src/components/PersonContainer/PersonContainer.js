import React, {Component} from "react";
import "./PersonContainer.css"

class PersonContainer extends Component {
    constructor() {
        super();
        this.state = {
            base: {},
            person: {}
        };
    }


    componentDidMount() {
        Promise.all([
            fetch("https://api.themoviedb.org/3/configuration?api_key=b6a8e4a4ab21ca2124b1ca11818dda03"),
            fetch("https://api.themoviedb.org/3/person/11701?api_key=b6a8e4a4ab21ca2124b1ca11818dda03&language=en-US")
        ])
            .then(([res1, res2]) => {
                return Promise.all([res1.json(), res2.json()])
            })
            .then(([res1, res2]) => {
                console.log(res2);
                this.setState({
                    base: res1,
                    person: res2
                })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.userInput !== prevProps.userInput) {
            const query = "https://api.themoviedb.org/3/search/person?api_key=b6a8e4a4ab21ca2124b1ca11818dda03&language=en-US&query="
                + this.props.userInput + "&page=1&include_adult=false";
            fetch(query)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.props.changeBackground(data.results[0].known_for[0].backdrop_path);
                    fetch("https://api.themoviedb.org/3/person/" + JSON.stringify(data.results[0].id) + "?api_key=b6a8e4a4ab21ca2124b1ca11818dda03&language=en-US")
                        .then(res => res.json())
                        .then(data => {
                                this.setState({
                                    person: data
                                });
                            }
                        );
                });
        }
    }

    setPersonPoster() {
        if (this.state.base.images === undefined || this.state.person === undefined) {
            return "";
        }
        const base_url = this.state.base.images.base_url;
        const poster_size = "w500";
        const poster_url = this.state.person.profile_path;

        return base_url + poster_size + poster_url;
    }

    shorten(text, max) {
        return text && text.length > max ? text.slice(0, max).split('.').slice(0, -1).join('.') + "." : text
    }


    render() {

        return (
            <div className="person_container">
                <div className="person_poster">
                    <img id="poster" alt="person poster" src={this.setPersonPoster()}/>
                </div>
                <div className="person_meta">
                    <h1>{this.state.person.name}</h1>
                    <span className="department">{this.state.person.known_for_department}</span>
                    <p>{this.shorten(this.state.person.biography, 1100)}</p>
                </div>
            </div>
        )
    }

}


export default PersonContainer