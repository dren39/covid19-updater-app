import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import OptionDropdown from './OptionDropdown'
import StatsTable from './StatsTable'
import NewsContainer from './NewsContainer'
import Paginate from "./Paginate"
import '../Styles/SearchResult.css'

class SearchResultContainer extends Component {
    
    state = {
        statsObject: null,
        newsObject: null,
        newsTab: false,
        hasError: false,
        currentPage: 1,
        postsPerPage: 8,
        indexOfLastPost: 8,
        indexOfFirstPost: 0,
        totalPosts: 0
    }

    componentDidMount() {
        const searchTerm = () => {
            // this prevents program from crashing on page refresh by checking for a searchterm
            // saved in local storage
            if(!this.props.searchTerm) {
                return localStorage.getItem("searchTerm")
            } else {
                return this.props.searchTerm.toUpperCase()
            }
        }
        console.log("This is searchTerm from SearchResultContainer:",searchTerm().toUpperCase());
        // fetch for stats data
        fetch(`https://api.smartable.ai/coronavirus/stats/US-${searchTerm().toUpperCase()}`, {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                this.setState({hasError: true})
            }
        })
        .then(data => {
            this.setState({statsObject: data})
            console.log(this.state.statsObject)
        })
        .catch(error => {
            console.log(error)
        })

        // fetch for news data
        fetch(`https://api.smartable.ai/coronavirus/news/US-${searchTerm().toUpperCase()}`, {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                this.setState({hasError: true})
            }
        })
        .then(data => {
            // console.log(data.news)
            this.setState({newsObject: data, totalPosts: data.news.length})
            console.log(this.state.newsObject)
        })
        .catch(error => {
            console.log(error)
        })
        this.props.clearSearchBar()
    }

    currentPosts = () => {
        // this method returns an array of posts sliced from the original array
        // with just the indexes provided, this creates the paginated view
        // conditional prevents program from crashing on component load when state is undefined
        if(this.state.newsObject){
            return this.state.newsObject.news.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost);
        }
    }

    paginateHandler = (pageNumber) => {
        // this will update the values of first/last index post every time a new page is clicked
        // when state is reset it will change the pagination list
        console.log(pageNumber)
        const indexOfLastPost = pageNumber*this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost-this.state.postsPerPage;
        this.setState({currentPage: pageNumber, indexOfLastPost: indexOfLastPost, indexOfFirstPost: indexOfFirstPost},()=>console.log(this.state.indexOfLastPost))
    }

    renderNewsContainer = () => {
        return (
            <div>
                <OptionDropdown dropdownChangeHandler={this.dropdownChangeHandler}/>
                <NewsContainer newsArray={this.currentPosts()} location={this.state.newsObject.location.provinceOrState}/>
                <Paginate
                    postsPerPage={this.state.postsPerPage}
                    totalPosts={this.state.totalPosts}
                    paginateHandler={this.paginateHandler}
                />
            </div>
        )
    }

    renderStatsTable = () => {
        return (
            <div>
                <OptionDropdown dropdownChangeHandler={this.dropdownChangeHandler}/>
                <StatsTable statsObj={this.state.statsObject}/>
            </div>
        )
    }

    dropdownChangeHandler = (selection) => {
        // this logic toggles whether the stats table or the news grid will render
        if(selection === "News") {
            this.setState({newsTab: true})
        } else {
            this.setState({newsTab: false})
        }
    }

    render() {
        return (
            <div>
                {this.state.hasError ? 
                    <div className="error-wrapper">
                        <p>
                            Woops, look like something went wrong.
                            Please go back and try entering your State again
                        </p> 
                        <Link to={"/"}>
                            <Button color='blue'>Back</Button>
                        </Link> 
                    </div>

                : null}
                {this.state.statsObject && !this.state.newsTab ? this.renderStatsTable() : null}
                {this.state.newsObject && this.state.newsTab ? this.renderNewsContainer(): null}
                {this.state.statsObject || this.state.hasError ? null : <h2 className="load-msg">Loading</h2>}
            </div>
        )
    }
}

export default SearchResultContainer
