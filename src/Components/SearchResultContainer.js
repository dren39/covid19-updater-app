import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NewsCard from './NewsCard'
import { Card, Button } from 'semantic-ui-react'
import OptionDropdown from './OptionDropdown'
import StatsTable from './StatsTable'
import NewsContainer from './NewsContainer'
import '../Styles/SearchResult.css'

class SearchResultContainer extends Component {
    
    state = {
        statsObject: null,
        newsObject: null,
        newsTab: false,
        hasError: false
    }

    componentDidMount() {
        const searchTerm = () => {
            if(!this.props.searchTerm) {
                return localStorage.getItem("searchTerm")
            } else {
                return this.props.searchTerm.toUpperCase()
            }
        }
        console.log("This is searchTerm from SearchResultContainer:",searchTerm().toUpperCase());
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
            this.setState({newsObject: data})
            console.log(this.state.newsObject)
        })
        .catch(error => {
            console.log(error)
        })
        this.props.clearSearchBar()
    }

    renderNewsContainer = () => {
        return (
            <div>
                <OptionDropdown dropdownChangeHandler={this.dropdownChangeHandler}/>
                <NewsContainer newsObject={this.state.newsObject}/>
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
                {this.state.statsObject || this.state.hasError ? null
                    // <div className="back-btn-wrapper">
                    //     <Link to={"/"}>
                    //         <Button color='blue'>Back</Button>
                    //     </Link> 
                    // </div>
                    : <h2 className="load-msg">Loading</h2>
                }
            </div>
        )
    }
}

export default SearchResultContainer
