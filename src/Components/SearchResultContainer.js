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
    }

    componentDidMount() {
        fetch(`https://api.smartable.ai/coronavirus/stats/US-${this.props.searchTerm.toUpperCase()}`, {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => response.json())
        .then(data => {
            this.setState({statsObject: data})
            console.log(this.state.statsObject)
        })

        fetch(`https://api.smartable.ai/coronavirus/news/US-${this.props.searchTerm.toUpperCase()}`, {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => response.json())
        .then(data => {
            // console.log(data.news)
            this.setState({newsObject: data})
            console.log(this.state.newsObject)
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
                {this.state.statsObject && !this.state.newsTab ? this.renderStatsTable() : null}
                {this.state.newsObject && this.state.newsTab ? this.renderNewsContainer(): null}
                {this.state.statsObject ? null
                    // <div className="back-btn-wrapper">
                    //     <Link to={"/"}>
                    //         <Button color='blue'>Back</Button>
                    //     </Link> 
                    // </div>
                    : <h2 className="load-msg">Loading Data</h2>
                }
            </div>
        )
    }
}

export default SearchResultContainer
