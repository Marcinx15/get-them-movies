import React, {Component} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./AddMovie.css"
import axios from 'axios';

export default class AddMovie extends Component{

    constructor(props) {
        super(props);

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescritpion = this.onChangeDescritpion.bind(this);
        this.onChangeTagline = this.onChangeTagline.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '',
            tagline: '',
            duration: 0,
            release_date: new Date()
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeDescritpion(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeTagline(e) {
        this.setState({
            tagline: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            release_date: date
        })
    }

    onSubmit(e){
        e.preventDefault();

        const movie = {
            title: this.state.title,
            description: this.state.description,
            tagline: this.state.tagline,
            duration: this.state.duration,
            release_date: this.state.release_date
        };

        console.log(movie);

        axios.post('http://localhost:5000/movies/add', movie)
            .then(res => console.log(res))

        // window.location = "/";
    }

    render() {
        return (
            <div className="general">
                <h3>Add New Film To Our Database</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group1">
                        <label>Title: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescritpion}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.release_date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Tagline: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.tagline}
                            onChange={this.onChangeTagline}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Movie Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}