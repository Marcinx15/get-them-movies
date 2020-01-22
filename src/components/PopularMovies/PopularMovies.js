import * as React from 'react';
import '../TopMovies/TopMovies.css';
import Card from '../MovieCard/MovieCard'
import axios from 'axios';

class PopularMovies extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cardData: [],
            page: 1
        }
    }

    handleClick = () => {
        this.setState({page: this.state.page + 1})
        this.getMovies()

    }


    getMovies() {
        axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: "b6a8e4a4ab21ca2124b1ca11818dda03",
                page: this.state.page + 1
            }
        })
            .then((response) => {
                if (response.data.results.length) {
                    setTimeout(() => {
                        this.setState({
                            cardData: this.state.cardData.concat(response.data.results),
                        });
                    }, 700)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: "b6a8e4a4ab21ca2124b1ca11818dda03",
                page: this.state.page
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

            {this.state.cardData.length ? <div>
                {this.state.cardData.map((movie, index) => {
                    return <Card movie={movie} key={index}/>
                })}

            </div> : null}
            <button className="btn" onClick={this.handleClick}><span>LOAD MORE MOVIES</span></button>

        </div>
    }
}

export default PopularMovies