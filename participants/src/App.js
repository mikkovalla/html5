import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import axios from 'axios'

const App = () => {
  
  const [people, peopleData] = useState({ participants: [] })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://randomuser.me/api/?results=20'
      );
        peopleData(result.results)        
    }
    fetchData()
  }, [])


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
