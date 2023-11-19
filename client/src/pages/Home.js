import React from 'react'
import githubIcon from '../assets/brand-github.svg'
import userIcon from '../assets/user-icon.svg'


function Home() {
    return(
        <>
            <header>
                <h1>PORTLAND NATIVE PLANTS</h1>
                <h2>Helping you find the right plant, for the right place.</h2>
                <h3>An expansive collection of plants native to Portland, Oregon.</h3>
            </header>
            <footer>
                <a target="_blank" href="https://github.com/cody-barker/portland-native-plant-list-react-in-progress"><img src={githubIcon}/></a>
                <a target="_blank" href="https://codybarker.dev"><img src={userIcon}/></a>
            </footer>
        </>
    )
}

export default Home