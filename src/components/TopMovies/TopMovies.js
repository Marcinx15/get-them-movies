import * as React from 'react';
import './TopMovies.css';
import Card from '../MovieCard/MovieCard'
import axios from 'axios';

class TopMovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardData: [],
            page: 1,
            //sorted 1 - by title
            //sorted 2 - by popularity
            sorted: 1
        }
    }

    loadNextPage = () => {
        this.setState({page : this.state.page + 1})
        this.getMovies()

    }

    sortByTitle = () => {
        if (this.state.cardData && this.state.cardData.length > 0) {
            if (this.state.sorted === 1) {
                let results = this.state.cardData.reverse();
                this.setState({
                    cardData: results,
                    sorted: -1
                });
            } else {
                let results = this.state.cardData.sort((a, b) => a.title.localeCompare(b.title, {sensitivity: 'base'}));
                this.setState({
                    cardData: results,
                    sorted: 1
                });
            }
        }
    }



    sortByPopularity = () => {
        if (this.state.cardData && this.state.cardData.length > 0) {
            if (this.state.sort === 2) {
                let results = this.state.cardData.reverse();
                this.setState({
                    cardData: results,
                    sort: -2
                });
            } else {
                let results = this.state.cardData.sort((a, b) => (a.popularity < b.popularity) ? -1 : ((a.popularity > b.popularity) ? 1 : 0));
                this.setState({
                    cardData: results,
                    sort: 2
                });
            }
        }
    }

    sortByVoteAverage = () => {
        if (this.state.cardData && this.state.cardData.length > 0) {
            if (this.state.sort === 3) {
                let results = this.state.cardData.reverse();
                this.setState({
                    cardData: results,
                    sort: -3
                });
            } else {
                let results = this.state.cardData.sort((a, b) => (a.vote_average < b.vote_average) ? -1 : ((a.vote_average > b.vote_average) ? 1 : 0));
                this.setState({
                    cardData: results,
                    sort: 3
                });
            }
        }
    }

    handleReverseClick = () => {
        this.setState({cardData: this.state.cardData.reverse()})

    }
    getMovies(){
        axios.get('https://api.themoviedb.org/3/movie/top_rated', {params: {api_key: "b6a8e4a4ab21ca2124b1ca11818dda03", page: this.state.page + 1}})
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
        axios.get('https://api.themoviedb.org/3/movie/top_rated', {params: {api_key: "b6a8e4a4ab21ca2124b1ca11818dda03", page: this.state.page}})
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
            <button className="sortButton" onClick={this.sortByTitle}>
                SORT BY TITLE
            </button>
            <button className="sortButton" onClick={this.sortByPopularity}>
                SORT BY POPULARITY
            </button>
            <button className="sortButton" onClick={this.sortByVoteAverage}>
                SORT BY VOTE AVERAGE
            </button>
            <button className="sortButton" onClick={this.handleReverseClick}>
                Reverse Order
            </button>
            <button className="sortButton" onClick={this.loadNextPage}>
                LOAD MORE MOVIES
            </button>


            {this.state.cardData.length ? <div>
                {this.state.cardData.map((movie, index) => {
                    return <Card movie={movie} key={index}/>
                })}

            </div> : null}
        </div>
    }
}

export default TopMovies