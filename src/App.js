import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPeople from "./components/SearchPeople/SearchPeople";
import SearchShows from "./components/SearchShows/SearchShows";
import Info from "./components/Info/Info";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
    return (
        <Router>
            <div className="container">
                <Header/>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/search_people" component={SearchPeople}/>
                    <Route path="/search_shows" component={SearchShows}/>
                    <Route path="/top_movies" component={SearchShows}/>
                    <Route path="/about_us" component={AboutUs}/>
                    <Route path="/info" component={Info}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
