import React from 'react';
import './searchPlayers.css';
import { useHistory } from 'react-router-dom';
export const SearchPlayer = ({searchPlayer,setsearchPlayer}) => {
    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchPlayer}`)
        e.preventDefault()
    };
    return (
        <div>
            <form action="/" method="get" autoComplete ="off" onSubmit ={onSubmit}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Players by Name,Nationality or Club</span>
        </label>
        <input className ="search_text"
            value = {searchPlayer}
            onInput ={e => setsearchPlayer(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search by Name,Nationality or Club"
            name="s" 
        />
      <button type="submit" className ="submit_btn">Search</button>
    </form>
        </div>
    )
}


