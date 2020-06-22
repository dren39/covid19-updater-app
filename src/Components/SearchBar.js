import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import '../Styles/SearchBar.css';

function SearchBar(props) {
    return (
        <div className="searchbar-top-wrapper">
            <div className="searchbar-wrapper">
                <Link to={`/${props.searchTerm.toUpperCase()}`}>
                    <Input
                        onChange={props.searchHandler}
                        value={props.searchTerm}
                        placeholder="Enter a state e.g 'CA'"
                        maxLength="2"
                        action={{ icon: 'search', color:'blue' }}
                    />
                </Link>
            </div>
            <div className="message-wrapper">
                <h4>Stay Home Stay Safe</h4>
            </div>
        </div>
    )
}
    
export default withRouter(SearchBar);