import React from 'react'
import { Dropdown, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../Styles/OptionDropdown.css';

function OptionDropdown(props) {
    
    const options = [
        {key: "Stats", text: "Stats", value: "Stats"},
        {key:"News", text:"News", value:"News"},
    ]

    return(
        <div className="dropdown-wrapper">
            {props.isHome ? null : 
                <div className="back-btn-wrapper">
                    <Link to={"/"}>
                        <Button color='blue'>Back</Button>
                    </Link> 
                </div>
            }
            <div>
                <Dropdown
                    placeholder="What would you like to see?"
                    options={options}
                    selection
                    onChange={event=> props.dropdownChangeHandler(event.target.textContent)}
                />
            </div>
        </div>
    )
}

export default OptionDropdown;