import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import List from './components/List';
import InstaDetailPage from './pages/InstaDetailPage';
import AboutPage from './pages/AboutPage';

function App() {

  const [data, setData] = useState([])

  function fetchData() {
    fetch('https://image-mock-data.firebaseio.com/images.json')
      .then(res => res.json())
      .then(data => setData(data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/insta-list'>Insta</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
      <Switch>

        <Route path='/insta/:instaId' component={InstaDetailPage}>
        </Route>

        <Route path='/insta-list'>
          <div className='container'>
            <List data={data} />
          </div>
        </Route>

        <Route path='/about' component={AboutPage}>
        </Route>

        <Route path='/'>
          <h1>velkomen</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
