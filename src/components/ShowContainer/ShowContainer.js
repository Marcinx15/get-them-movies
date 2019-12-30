import React, {Component} from "react";
import "./ShowContainer.css"

class ShowContainer extends Component{
    constructor() {
        super();
        this.state = {
            base: {},
            show: {}
        };
        this.setShowPoster = this.setShowPoster.bind(this);
    }


    componentDidMount(){
        Promise.all([
            fetch("https://api.themoviedb.org/3/configuration?api_key=b6a8e4a4ab21ca2124b1ca11818dda03"),
            fetch("https://api.themoviedb.org/3/tv/1399?api_key=b6a8e4a4ab21ca2124b1ca11818dda03&language=en-US")
        ])
            .then(([res1,res2]) => {
                return Promise.all([res1.json(), res2.json()])
            })
            .then(([res1, res2]) =>{
                console.log(res2);
                this.setState({
                    base: res1,
                    show: res2
                })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.userInput !== prevProps.userInput){
            const query = "https://api.themoviedb.org/3/search/movie?api_key=b6a8e4a4ab21ca2124b1ca11818dda03&language=en-US&query="
                + this.props.userInput + "&page=1&include_adult=false";
            fetch(query)
                .then(res => res.json())
                .then(data => {
                    fetch("https://api.themoviedb.org/3/movie/"+ JSON.stringify(data.results[0].id)+"?api_key=b6a8e4a4ab21ca2124b1ca11818dda03&language=en-US")
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


    setShowPoster(){
        if (this.state.base.images === undefined || this.state.show === undefined) {
            return "";
        }
        const base_url = this.state.base.images.base_url;
        const poster_size = "w500";
        const poster_url = this.state.show.poster_path;

        return base_url+poster_size+poster_url;
    }



    render(){
        let genres = '';
        if(this.state.show.genres !== undefined) {
            this.state.show.genres.map((o) =>{
                genres += o.name + ', '
            });
            genres = genres.substr(0, genres.length - 2);
        }

        return(

            <div className="show_container">
                <div className="show_poster">
                    <img id="poster" alt="show poster" src={this.setShowPoster()} />
                </div>
                <div className="show_meta">
                    <h1>{this.state.show.name}</h1>
                    <span className="catchphrase">{this.state.show.season_number}</span>
                    <p>{this.state.show.overview}</p>
                    <div className="genres">
                        <p>{genres}</p>
                    </div>
                </div>
            </div>
        )
    }

}


export default ShowContainer