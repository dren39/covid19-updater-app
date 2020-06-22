import React from 'react'
import '../Styles/About.css'

function About() {
    return (
        <div className="about-wrapper">
            <p>
                Covid19 Daily Update is a React web application developed to help spread information
                and awareness about the 2019 coronavirus global pandemic. The app's main functions are to
                retrieve and provide Covid19 news and statistics for the U.S. or any given State. News and
                statistics are updated on a daily basis.
            </p>
            <p className="about-center-wrapper">
                This app is powered by the 
                <span>
                    <a href="https://developer.smartable.ai/api-details#api=coronavirus"> Smartable AI API</a>
                </span>
            </p>
            <a className="about-center-wrapper" href="https://github.com/dren39/covid19-updater-app">
                Github Repository
            </a>
        </div>
    )
}

export default About
