import React, {Component} from "react";
import "./SearchShows.css"
import Searchbar from "../Searchbar/Searchbar";
import ShowContainer from "../ShowContainer/ShowContainer";

class SearchShows extends Component {
    constructor() {
        super();
        this.state = {
            backgroundUrl: 'url("https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg")',
            userInput: ''
        };

        this.getUserInput = this.getUserInput.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
    }

    getUserInput(input) {
        this.setState({
            userInput: input
        });
    }

    changeBackground(posterUrl) {
        const fullUrl = "https://image.tmdb.org/t/p/original" + posterUrl;
        this.setState({
            backgroundUrl: 'url(' + fullUrl + ')'
        });
    }


    render() {
        return (
            <div className="outer" style={{backgroundImage: this.state.backgroundUrl}}>
                <div className="inner">
                    <Searchbar getUserInput={this.getUserInput} placeholder={"What show are you looking for?"}/>
                    <ShowContainer userInput={this.state.userInput} changeBackground={this.changeBackground}/>
                </div>
            </div>
        )
    }
}


export default SearchShows