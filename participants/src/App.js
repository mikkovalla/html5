import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import ParticipantList from './components/ParticipantList'
import axios from 'axios'

const App = () => {
  
  const [people, peopleData] = useState([])

  useEffect(() => {
    async function fetchParticipants() {
      const result = await axios(
        'https://randomuser.me/api/?results=20',
      )
        peopleData(result.data.results)              
    }
    fetchParticipants();
  }, []);

  console.log('Person: ', people)

  return (
    <div className="App">
      <Header />
      <ParticipantList participants={ people } removeParticipant={ peopleData }/>
    </div>
  );
}

export default App;
