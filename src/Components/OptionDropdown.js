import React from 'react'
import { Dropdown } from 'semantic-ui-react'

function OptionDropdown(props) {
    
    const options = [
        {key: "Stats", text: "Stats", value: "Stats"},
        {key:"News", text:"News", value:"News"}, 
    ]

    return(
        <Dropdown
            placeholder="Whaat would you like to see?"
            options={options}
            selection
            // onChange={event=> props.filterHandler(event.target.textContent)}
        />
    )
}

export default OptionDropdown;