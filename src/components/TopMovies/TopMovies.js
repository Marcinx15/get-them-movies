import * as React from 'react';
import './TopMovies.css';
import Card from '../MovieCard/MovieCard'
import InfiniteScroll from 'react-infinite-scroll-component';
import {Loader} from 'semantic-ui-react';
import axios from 'axios';
import {Component} from "react";

class TopMovies extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            cardData: [],
            page: 1,
            isLoading: true,
            total_pages: 1,
            total_results: 1
        };
        this.getMovies = this.getMovies.bind(this);
        this.getMoreMovies = this.getMoreMovies.bind(this)
    }

    getMovies() {
        axios.get('https://api.themoviedb.org/3/movie/popular', {params: {api_key: "b6a8e4a4ab21ca2124b1ca11818dda03"}})
            .then((response) => {
                if (response.data.results.length) {
                    setTimeout(() => {
                        this.setState({
                            cardData: response.data.results,
                            page: response.data.page,
                            isLoading: false,
                            total_results: response.data.total_results,
                            total_pages: response.data.total_pages
                        });
                    }, 700)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    getMoreMovies() {
        console.log(123);
        if (this.state.page < this.state.total_pages) {
        axios.get('https://api.themoviedb.org/3/movie/popular', {params: {api_key: "b6a8e4a4ab21ca2124b1ca11818dda03", page: (this.state.page + 1)}})
            .then((response) => {
                if (response.data.results.length) {
                    let results = this.state.cardData.concat(response.data.results);
                    setTimeout(() => {
                        this.setState({
                            cardData: results,
                            page: response.data.page,
                            total_results: response.data.total_results,
                            total_pages: response.data.total_pages
                        });
                    }, 1000)
                }
            })
            .catch(err => {
                console.log(err)
            })}
    }

    componentDidMount() {
        this.getMovies()
    }

    // componentDidUpdate() {
    //     this.getMoreMovies()
    // }


    render() {

        return <InfiniteScroll
            pageStart={0}
            next={this.getMoreMovies}
            dataLength={this.state.cardData.length}
            hasMore={true}
            loader={<Loader>...</Loader>}
            endMessage={
                <p style={{textAlign: 'center'}}>
                    <b>These were all the films we have on our database.</b>
                </p>
            }><div className="main">
            <div>
                {this.state.cardData.map((movie, index) => {
                    return <Card movie={movie} key={index}/>
                })}
            </div>}
        </div>
        </InfiniteScroll>

    }
}

export default TopMovies