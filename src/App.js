import './App.css';
import Playerstats from "./Components/PlayerStats"
import { useState } from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import messi from "./messi2.jpeg";
import ronaldo from "./ronaldo.jpg";
import neymar from "./neymar.jpg";
import degea from "./degea.jpeg";
import bruyne from "./bruyne.jpeg";
import { Link } from 'react-router-dom';
import { Main } from './main';

function App() {
 
const players = [
  { id: '1', name: 'L.Messi',Age :'31',Nationality:"Argentina",Overall:94,Club:"FC Barcelona",value:'â‚¬110.5M',wage : "565k",preferred_foot:"left",workrate:"Medium/Medium",Position:"RF",JerseyNumber:"10",Joined:"01-Jul-04",contract_valid_till:2021,height:'5\n7',Weight:"159lbs",Crossing:84,Finishing:95,HeadingAccuracy:70,ShortPass:90,Volleys:86,code:'messi'},
  { id: '2', name: 'Cristiano Ronaldo',code:'ronaldo',Nationality:"Portugal" ,Club:"Juventus" },
  { id: '3', name: 'Neymar Jr',code:'neymar',Nationality:"Brazil",Club:"Paris Saint-Germain" },
  { id: '4', name: 'De Gea',code:'degea',Nationality:"Spain" ,Club:"Manchester United"},
  { id: '5', name: 'K. De Bruyne',code:'bruyne',Nationality:"Belgium" ,Club:"Manchester City " }
];
const { search } = window.location;


const query = new URLSearchParams(search).get('s');
//Use state 
const [searchQuery, setSearchQuery] = useState(query || '');
let sigma = false;

const filterPosts = (players, query) => {
  if (!query) {
      return players;
  }

  return players.filter((post) => {
      const playersName = post.name.toLowerCase();
      console.log(post.Nationality);
      const playerNationality = post.Nationality.toLowerCase();
      console.log(playerNationality.includes(query));
      const playerClub =post.Club.toLowerCase();
      if(playersName.includes(query) || playerNationality.includes(query) || playerClub.includes(query)){  // Search For Player by its Name,Nationality or Club
      return true; 
      }
      else {
        return false;
      }
      
  });
};

//Render players on the home screen when players query is searched
const renderPlayers =(filteredPosts)=>{

  if(searchQuery==""){
      return;
  } 
  else{
    return filteredPosts.map((players)=>(
      <Link to ="/playerstats">
      <li key ={players.id} className="player">
        <p>{renderImage(players)}</p>
       <p className="player_name"> {players.name }</p>
         </li>
         </Link>
    ))
  }

 }
const filteredPosts =filterPosts(players,searchQuery);
// Render Images for each player on the players list
const renderImage = (players)=>{
  if (players.code === "messi"){
    return <img src ={messi} className="Mini_img"/>
  }
  if (players.code === "ronaldo"){
    return <img src ={ronaldo}  className="Mini_img"/>
  }
  if (players.code === "neymar"){
    return <img src ={neymar}  className="Mini_img"/>
  }
  if (players.code === "degea"){
    return <img src ={degea}  className="Mini_img"/>
  }
  if (players.code === "bruyne"){
    return <img src ={bruyne}  className="Mini_img"/>
  }
  else{
    return null;
  }

}
return (<Router >

<Switch>

  <Route path ="/playerstats"><Playerstats/></Route>
  <Route path =""><Main searchPlayer ={searchQuery}
      setsearchPlayer = {setSearchQuery}
      renderer ={renderPlayers(filteredPosts)} >

 </Main></Route>
</Switch>


</Router> 
); 
}
export default App;

