import React, {Component} from "react";
import "./Main.css"
import Searchbar from "../Searchbar/Searchbar";
import FilmContainer from "../FilmContainer/FilmContainer";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            backgroundUrl: 'url("https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg")',
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
                    <Searchbar getUserInput={this.getUserInput} placeholder={"What movie are you looking for?"}/>
                    <FilmContainer userInput={this.state.userInput} changeBackground={this.changeBackground}/>
                </div>
            </div>
        )
    }
}


export default Main