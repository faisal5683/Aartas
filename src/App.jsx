import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Dates from './component/Dates'

function App() {
  const [data, setData] = useState();
  const fetchData = async () => {
    const data = await axios.post("https://aartas-qaapp-as.azurewebsites.net/aartas_uat/public/api/doctor", null, {
      params: {
        doctor_id: 1
      }
    })
      .then((respone) => setData(respone))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchData();
  }, []);

  const dateSlots = data?.data.data[0].timeslots;

  return (
    <div>
      <section>
        <Dates dateSlots={dateSlots} />
      </section>
    </div>
  )
}

export default App
