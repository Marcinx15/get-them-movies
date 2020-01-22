import * as React from 'react';
import '../TopMovies/TopMovies.css';
import Card from '../MovieCard/MovieCard'
import axios from 'axios';

class LatestMovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardData: [],
            query: 'now_playing'
        }
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=b6a8e4a4ab21ca2124b1ca11818dda03&language=en-US&page=1&region=pl', {params: {api_key: "b6a8e4a4ab21ca2124b1ca11818dda03"}})
            .then((response) => {
                if (response.data.results.length) {
                    setTimeout(() => {
                        this.setState({
                            cardData: response.data.results,
                        });
                    }, 700)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleClick = () => {
        this.setState({query: "upcoming"})
        this.getMovies()

    }

    getMovies() {
        axios.get('https://api.themoviedb.org/3/movie/' + this.state.query, {
            params: {
                api_key: "b6a8e4a4ab21ca2124b1ca11818dda03",
            }
        })
            .then((response) => {
                if (response.data.results.length) {
                    setTimeout(() => {
                        this.setState({
                            cardData: response.data.results,
                        });
                    }, 700)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return <div className="main">
            <button className="btn" onClick={this.handleClick}><span>UPCOMING MOVIES</span></button>
            {this.state.cardData.length ? <div>
                {this.state.cardData.map((movie, index) => {
                    return <Card movie={movie} key={index}/>
                })}
            </div> : null}
        </div>
    }
}

export default LatestMovies