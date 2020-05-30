import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import { Search, Button } from 'semantic-ui-react';

function SearchBar(props) {
    return (
        <div>

            <Search
                onSearchChange={props.searchHandler}
                value={props.searchTerm}
                placeholder="Enter a state e.g 'CA'"
                maxLength="2"
                showNoResults={false}
            />
            <Link to={`/${props.searchTerm.toUpperCase()}`}>
                <Button>Search</Button>
            </Link>
        </div>
        // <div id="searchbar">
        //     <input 
        //         type="text"
        //         value={props.searchTerm} 
        //         onChange={props.searchHandler}
        //         placeholder="Enter a state e.g 'CA'"
        //         maxLength="2"
        //         />
        //     <Link to={`/${props.searchTerm.toUpperCase()}`}>
        //         <button type="submit">Search</button>
        //     </Link>
        // </div>
    )
}

export default withRouter(SearchBar);

// import React, { Component } from 'react';
// import {Link, withRouter} from 'react-router-dom';

// class SearchBar extends Component {
//     render() {
//         return (
//             <div id="searchbar">
//                 <input 
//                     type="text"
//                     value={this.props.searchTerm} 
//                     onChange={this.props.searchHandler}
//                     placeholder="Enter a state e.g 'CA'"
//                     maxLength="2"
//                 />
//                 <Link to={`/${this.props.searchTerm.toUpperCase()}`}>
//                     <button type="submit">Search</button>
//                 </Link>
//             </div>
//         )
//     }
// }

// export default withRouter(SearchBar);