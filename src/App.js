import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './components/Users';
import User from './routes/User';

function App() {
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsersList(response.data)
      }).catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Navbar />      
      <Routes>
        <Route path="/" element={<Users usersList={usersList} />} />
        <Route path="/user" element={<User />}>
          <Route path=":userId" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
