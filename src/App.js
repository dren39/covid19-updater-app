import React, {Component} from 'react'
import './App.css'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from "./Components/Home"
// import SearchBar from "./Components/SearchBar";
import SearchResultContainer from "./Components/SearchResultContainer"
// import OptionDropdown from "./Components/OptionDropdown";
// import StatsTable from "./Components/StatsTable";
import Navbar from "./Components/Navbar"
import About from "./Components/About"

class App extends Component {

    state = {
        // location: null,
        searchTerm: "",
        usStatObject: null,
        usNewsObject: null,
        currentPage: 1,
        postsPerPage: 5,
        indexOfLastPost: 5,
        indexOfFirstPost: 0
        // newsTab: false,
        // showDropdown: false
    }

    componentDidMount() {
        // fetch stats for the US
        fetch('https://api.smartable.ai/coronavirus/stats/US', {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => response.json())
        .then(data => {
            this.setState({usStatObject: data}, ()=>console.log("this is stat saved to state:",this.state.usStatObject))
    
        })
        // fetch news for the US
        fetch('https://api.smartable.ai/coronavirus/news/US', {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => response.json())
        .then( data => {
            this.setState({usNewsObject: data}, ()=>console.log("this is news saved to state:",this.state.usNewsObject))
        })
    }

    // getNews = () => {
    //     fetch('https://api.smartable.ai/coronavirus/news/US-NY', {
    //         method: 'GET',
    //         headers: {
    //             'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
    //         }
    //     })//end of fetch
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         this.setState({location: data.location.provinceOrState})
    //     })
    // }//end of function

    // getStats = () => {
    //     fetch(`https://corona.lmao.ninja/v2/states/${this.state.location}?yesterday=false`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }

    searchHandler = (event) => {
        this.setState({searchTerm: event.target.value}, ()=>localStorage.setItem('searchTerm', this.state.searchTerm));
    }

    clearSearchBar = () => {
        this.setState({searchTerm: ""});
    }

    renderSearchResults = () => {
        return <SearchResultContainer searchTerm={this.state.searchTerm} clearSearchBar={this.clearSearchBar}/>
    }

    // showDropdown = () => {
    //     this.setState({showDropdown: !this.state.showDropdown}, this.renderNewsContainer())
    // }
    // Pagination
    // indexOfLastPost = this.state.currentPage*this.state.postsPerPage;
    // indexOfFirstPost = this.indexOfLastPost-this.state.postsPerPage;
    currentPosts = () => {
        if(this.state.usNewsObject){
            return this.state.usNewsObject.news.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost);
        }
    }
    totalPosts = () => {
        if(this.state.usNewsObject) {
            return this.state.usNewsObject.news.length
        }
    }

    createPagination = () => {
        const indexOfLastPost = this.state.currentPage*this.state.postsPerPage;
        const indexOfFirstPost = this.indexOfLastPost-this.state.postsPerPage;
        const currentPosts = () => {
            if(this.state.usNewsObject){
                return this.state.usNewsObject.news.slice(indexOfFirstPost, indexOfLastPost);
            }
        }
        return currentPosts();
    }

    paginateHandler = (pageNumber) => {
        console.log(pageNumber)
        const indexOfLastPost = pageNumber*this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost-this.state.postsPerPage;
        this.setState({currentPage: pageNumber, indexOfLastPost: indexOfLastPost, indexOfFirstPost: indexOfFirstPost},()=>console.log(this.state.indexOfLastPost))
    }

    renderHome = () => {
        return (
            <Home 
                searchTerm={this.state.searchTerm} 
                searchHandler={this.searchHandler}
                usStatObject={this.state.usStatObject}
                usNewsObject={this.currentPosts()} // usNewsObject is an array 
                postsPerPage={this.state.postsPerPage}
                totalPosts={this.totalPosts()}
                currentPage={this.state.currentPage}
                paginateHandler={this.paginateHandler}
            />
        )
    }


    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    {/* <SearchBar searchTerm={this.state.searchTerm} searchHandler={this.searchHandler}/> */}
                    {/* {this.state.showDropdown ? <OptionDropdown/> : null} */}
                    <Switch>
                        <Route path='/about' component={About}/>
                        <Route path='/:state' component={this.renderSearchResults}/>
                        <Route path='/' component={this.renderHome}/>
                    </Switch>

                    {/* <button onClick={this.getNews}>Make fetch</button> */}
                    {/* { this.state.location ? <button onClick={this.getStats}>Would you like to see stats in {this.state.location}</button> : null } */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
