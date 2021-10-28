import React from "react";
import "./PlayerStats.css"

import Charts from "./Chart";

import { Link } from "react-router-dom";
import messi from "./../messi2.jpeg";
function PlayerStats(props) {
 
 const playerInfo = 
 { id: '1',
  name: 'Lionel A. Messi',
  Age :'31',
  Nationality:"Argentina",
  Overall:94,
  Club:"FC Barcelona",
  value:'110.5M',
  wage : "565k",
  preferred_foot:"left",
  workrate:"Medium/Medium",
  Position:"RF",
  JerseyNumber:"10",
  Joined:"01-Jul-04",
  contract_valid_till:2021,
  height:`5'7`,
  Weight:"159lbs",
  Crossing:84,
  Finishing:95,
  HeadingAccuracy:70,
  ShortPass:90,
  Volleys:86,
  code:'messi'}
  return (
 <div>
 <h1 className ="header2">{playerInfo.name}</h1>
 <img src ={messi} className="player_pic"/>
 <Link to="">
     <button type="button" className="home">
            Home
     </button>
 </Link>
 <div class="rectangle1">Overall : {playerInfo.Overall} </div>
 <div class="rectangle2">Finishing: {playerInfo.Finishing} </div>
<div className="container">
 <Charts/>      
 <div className="player_info">
 <div className="player_info_container" >
   <p>Age :{playerInfo.Age}</p>
   <p >Height :{playerInfo.height}</p>  
   <p>Weight :{playerInfo.Weight} </p>
   <p>Value :{playerInfo.value}</p> 
   <p >Club :{ playerInfo.Club}</p> 
   <p > Nationality :{playerInfo.Nationality}</p> 
   <p>Preferred Foot :{playerInfo.preferred_foot} </p>
   <p>Position :{playerInfo.Position} </p>
   <p >JerseyNumber :{playerInfo.JerseyNumber}</p> 
   <p >Crossing : {playerInfo.Crossing} </p>
   <p >Joined :{playerInfo.Joined} </p>
   <p >Contract Valid Till: {playerInfo.contract_valid_till} </p>
   <p >Work Rate (Attack/Defense):{playerInfo.workrate} </p>
 </div>
 </div>
 </div>
</div>
  );
}

export default PlayerStats;