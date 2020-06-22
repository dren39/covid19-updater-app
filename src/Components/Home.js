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

    dropdownChangeHandler = (selection) => {
        // this logic toggles whether the stats table or the news grid will render
        if(selection === "News") {
            this.setState({newsTab: true})
        } else {
            this.setState({newsTab: false})
        }
    }

    renderNewsContainer = () => {
        return (
            <div>
                <OptionDropdown dropdownChangeHandler={this.dropdownChangeHandler} isHome={true}/>
                <NewsContainer newsArray={this.props.usNewsArray}/>
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
                <OptionDropdown dropdownChangeHandler={this.dropdownChangeHandler} isHome={true}/>
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
            </div>
        )
    }
}

export default withRouter(Home);
