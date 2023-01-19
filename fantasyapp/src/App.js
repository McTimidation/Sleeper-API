
import axios from 'axios';
import './App.css';
import getData from'./components/getData.js'
import yahooLeagueID from './components/getData.js'

function App() {
  getData()
  let myUserID = '642154522499719168'
  function getUserData() {
    axios.get(`https://api.sleeper.app/v1/user/${myUserID}/leagues/nfl/2022`)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
  getUserData()
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          Sleeper Fantasy Football
        </h1>
        
        
      </header>
    </div>
  );
}

export default App;
