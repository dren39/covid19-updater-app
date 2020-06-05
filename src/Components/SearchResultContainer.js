import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NewsCard from './NewsCard';
import { Card } from 'semantic-ui-react';
import OptionDropdown from './OptionDropdown';
import StatsTable from './StatsTable';

class SearchResultContainer extends Component {
    
    state = {
        statsObject: null,
        newsArray: null,
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
            this.setState({newsArray: data.news})
            console.log(this.state.newsArray)
        })
        this.props.clearSearchBar()
    }

    renderNewsCards = () => {
        return (
            <div>
                <OptionDropdown dropdownChangeHandler={this.dropdownChangeHandler}/>
                <Card.Group itemsPerRow={3} centered>
                    {this.state.newsArray.map((article, index) => <NewsCard article={article} key={index}/>)}
                </Card.Group>
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
                {this.state.newsArray && this.state.newsTab ? this.renderNewsCards(): null}
                {this.state.statsObject ? <Link to={"/"}><button>Back</button></Link> : <h3>Loading</h3>}
            </div>
        )
    }
}

export default SearchResultContainer
