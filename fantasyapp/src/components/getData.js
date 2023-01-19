import axios from 'axios';

let yahooLeagueID = '917940107465318400'


function getData() {
    axios.get(`https://api.sleeper.app/v1/league/${yahooLeagueID}/users`)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

export default getData;