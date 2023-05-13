import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import "./App.css"
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {originals,actions, comedy, horror, romance, trending} from "./urls"

function App() {
  return (
    <div>
    <NavBar/>
    <Banner/>
    <RowPost urls={originals} title="Netflix Originals"/>
    <RowPost urls={trending} title="Trending" isSmall/>
    <RowPost urls={actions} title="Action" isSmall/>
    <RowPost urls={comedy} title="Comedy" isSmall/>
    <RowPost urls={romance} title="Romance" isSmall/>
    <RowPost urls={horror} title="Horror" isSmall/>
    </div>
  )
}

export default App
