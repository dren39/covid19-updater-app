import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import SearchBar from "./SearchBar"
import StatsTable from "./StatsTable"
import NewsContainer from "./NewsContainer"
import OptionDropdown from "./OptionDropdown"
import Paginate from "./Paginate"
import "../Styles/Home.css"

class Home extends Component {

    state = {
        newsTab: false,
    }

    // getNews = () => {
        // fetch('https://api.smartable.ai/coronavirus/news/US-NY', {
        //     method: 'GET',
        //     headers: {
        //         'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
        //     }
        // })//end of fetch
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        //     this.setState({location: data.location.provinceOrState})
        // })
    // }

    // getStats = () => {
    //     fetch(`https://corona.lmao.ninja/v2/states/${this.state.location}?yesterday=false`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }

    // searchHandler = (event) => {
    //     this.setState({searchTerm: event.target.value}, console.log(this.state.searchTerm));
    // }

    dropdownChangeHandler = (selection) => {
        if(selection === "News") {
            this.setState({newsTab: true})
        } else {
            this.setState({newsTab: false})
        }
    }

    renderNewsContainer = () => {
        return (
            <div>
                <OptionDropdown dropdownChangeHandler={this.dropdownChangeHandler}/>
                <NewsContainer newsObject={this.props.usNewsObject}/> {/* newsObject is an array */}
                <Paginate 
                    postsPerPage={this.props.postsPerPage}
                    totalPosts={this.props.totalPosts}
                    paginateHandler={this.props.paginateHandler}
                />
            </div>
        )
    }

    renderStatsTable = () => {
        return (
            <div>
                <OptionDropdown dropdownChangeHandler={this.dropdownChangeHandler}/>
                <StatsTable statsObj={this.props.usStatObject}/>
            </div>
        )
    }

    render() {
        return (
            <div>
                {/* ternary render to prevent crashing when state does not initially exist */}
                {this.props.usStatObject ? 
                    <div>
                        <SearchBar searchTerm={this.props.searchTerm} searchHandler={this.props.searchHandler}/>
                        {this.state.newsTab ? this.renderNewsContainer(): this.renderStatsTable()}
                    </div>
                    : <h2 className="load-msg">Loading</h2>   
                }
                {/* <SearchBar searchTerm={this.props.searchTerm} searchHandler={this.props.searchHandler}/>
                <StatsTable statsObj={this.props.usStatObject}/> */}
                {/* <p>Stay Home Stay Safe</p> */}
                {/* <button onClick={this.getNews}>Make fetch</button> */}
                {/* { this.state.location ? 
                  <button onClick={this.getStats}>
                      Would you like to see stats in {this.state.location}
                  </button> : null } */}
            </div>
        )
    }
}

export default withRouter(Home);
