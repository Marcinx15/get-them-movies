import React, {Component} from "react";
import "./SearchPeople.css"
import Searchbar from "../Searchbar/Searchbar";
import PersonContainer from "../PersonContainer/PersonContainer";

class SearchPeople extends Component{
    constructor(){
        super();
        this.state ={
            backgroundUrl: 'url("https://image.tmdb.org/t/p/original/zsGiTcMZ9yp2as3FmPMgZyil5mc.jpg")',
            userInput: ''
        };

        this.getUserInput = this.getUserInput.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
    }

    getUserInput(input){
        this.setState({
            userInput: input
        });
    }

    changeBackground(posterUrl){
        const fullUrl = "https://image.tmdb.org/t/p/original" + posterUrl;
        this.setState({
            backgroundUrl: 'url(' +fullUrl+ ')'
        });
    }


    render(){
        return(
            <div className="outer" style={{backgroundImage: this.state.backgroundUrl }} >
                <div className="inner">
                    <Searchbar getUserInput={this.getUserInput} placeholder={"Who are you looking for?"} />
                    <PersonContainer userInput={this.state.userInput} changeBackground={this.changeBackground}  />
                </div>
            </div>
        )
    }
}


export default SearchPeople