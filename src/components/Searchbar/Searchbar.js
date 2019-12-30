import React, {Component} from "react";
import "./Searchbar.css"

class Searchbar extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.getUserInput(this.state.userInput);
        return true;
    }



    render(){
        return(
            <div className="TopBar">
                <div className="searchBar">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.userInput}
                            name="userInput"
                            placeholder={this.props.placeholder}
                            onChange={this.handleChange}
                        />
                        <button className="submit-btn">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Searchbar