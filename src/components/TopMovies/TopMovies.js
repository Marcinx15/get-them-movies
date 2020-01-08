import * as React from 'react';
import './TopMovies.css';
import Card from '../MovieCard/MovieCard'
import axios from 'axios';

class TopMovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardData: [],
        }
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular', {params: {api_key: "b6a8e4a4ab21ca2124b1ca11818dda03"}})
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
        </div>
    }
}

export default TopMovies