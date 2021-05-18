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

      let participants = result.data.results.map((item, i) => {
        return {
          id: i,
          name: `${item.name.first} ${item.name.last}`,
          email: item.email,
          phoneNumber: item.phone,
          edit: false
        }
      })
        peopleData(participants)              
    }
    fetchParticipants();
  }, []);

  console.log('People: ', people)
  return (
    <div className="App">
      <Header />
      <ParticipantList participants={ people } removeParticipant={ peopleData } updateParticipant= { peopleData }/>
    </div>
  );
}

export default App;
