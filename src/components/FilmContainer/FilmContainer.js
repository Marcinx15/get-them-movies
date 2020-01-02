import React, {Component} from "react";
import "./FilmContainer.css"

class FilmContainer extends Component {
    constructor() {
        super();
        this.state = {
            base: {},
            movie: {}
        };
        this.setMoviePoster = this.setMoviePoster.bind(this);
    }


    componentDidMount() {
        Promise.all([
            fetch("https://api.themoviedb.org/3/configuration?api_key=b6a8e4a4ab21ca2124b1ca11818dda03"),
            fetch("https://api.themoviedb.org/3/movie/155?api_key=b6a8e4a4ab21ca2124b1ca11818dda03&language=en-US")
        ])
            .then(([res1, res2]) => {
                return Promise.all([res1.json(), res2.json()])
            })
            .then(([res1, res2]) => {
                console.log(res2);
                this.setState({
                    base: res1,
                    movie: res2
                })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.userInput !== prevProps.userInput) {
            const query = "https://api.themoviedb.org/3/search/movie?api_key=b6a8e4a4ab21ca2124b1ca11818dda03&language=en-US&query="
                + this.props.userInput + "&page=1&include_adult=false";
            fetch(query)
                .then(res => res.json())
                .then(data => {
                    fetch("https://api.themoviedb.org/3/movie/" + JSON.stringify(data.results[0].id) + "?api_key=b6a8e4a4ab21ca2124b1ca11818dda03&language=en-US")
                        .then(res => res.json())
                        .then(data => {
                                this.setState({
                                    movie: data
                                });
                                this.props.changeBackground(data.backdrop_path);
                            }
                        );
                });
        }
    }


    setMoviePoster() {
        if (this.state.base.images === undefined || this.state.movie === undefined) {
            return "";
        }
        const base_url = this.state.base.images.base_url;
        const poster_size = "w500";
        const poster_url = this.state.movie.poster_path;

        return base_url + poster_size + poster_url;
    }


    render() {
        let genres = '';
        if (this.state.movie.genres !== undefined) {
            this.state.movie.genres.map((o) => {
                genres += o.name + ', '
            });
            genres = genres.substr(0, genres.length - 2);
        }

        return (

            <div className="film_container">
                <div className="film_poster">
                    <img id="poster" alt="movie poster" src={this.setMoviePoster()}/>
                </div>
                <div className="film_meta">
                    <h1>{this.state.movie.original_title}</h1>
                    <span className="catchphrase">{this.state.movie.tagline}</span>
                    <p>{this.state.movie.overview}</p>
                    <div className="genres">
                        <p>{genres}</p>
                    </div>
                    <div className="details">
                        <div className="box">
                            <p>Average score:</p>
                            <span>{this.state.movie.vote_average} / 10 </span>
                        </div>
                        <div className="box">
                            <p>Budget:</p>
                            <span>${Number(this.state.movie.budget).toLocaleString()} </span>
                        </div>
                        <div className="box">
                            <p>Popularity:</p>
                            <span>{this.state.movie.popularity} </span>
                        </div>
                        <div className="box">
                            <p>Revenue:</p>
                            <span>${Number(this.state.movie.revenue).toLocaleString()} </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default FilmContainer