import React from 'react'
import { SearchPlayer } from './Components/SearchPlayer';
import "./App.css";

export const Main = ({searchPlayer,setsearchPlayer,renderer}) => {
    return (<div>
        <h1 className="header">FIFA  </h1>
        <h1 className="header_numb">21  </h1>
  <SearchPlayer  searchPlayer ={searchPlayer}
      setsearchPlayer = {setsearchPlayer}/>
 <ul className ="players_list">
  {renderer}
 </ul>
    </div>
    )
}
