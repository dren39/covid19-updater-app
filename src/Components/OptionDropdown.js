import React from 'react'
import { Dropdown } from 'semantic-ui-react'

function OptionDropdown(props) {
    
    const options = [
        {key:"News", text:"News", value:"News"}, 
        {key: "Stats", text: "Stats", value: "Stats"},
    ]

    return(
        <Dropdown
            placeholder="What would you like to see?"
            options={options}
            selection
            onChange={event=> props.dropdownChangeHandler(event.target.textContent)}
        />
    )
}

export default OptionDropdown;