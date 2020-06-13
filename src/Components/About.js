import React from 'react'
import '../Styles/About.css'

function About() {
    return (
        <div className="about-wrapper">
            <p>
                Covid19 Daily Update is a web application developed to help spread information
                and awareness about the 2019 coronavirus global pandemic. The app's main functions
                is to display statistics for infection cases within a given state, and 
                toggle to a news page where users will find the latest news article
                related to Covid19 within that State.
            </p>
            <p>
                This app is powered by the 
                <span>
                    <a href="https://developer.smartable.ai/api-details#api=coronavirus"> Smartable AI API</a>
                </span>
            </p>
            <a href="https://github.com/dren39/covid19-updater-app">Github Repository</a>
        </div>
    )
}

export default About
