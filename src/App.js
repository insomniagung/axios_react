import React, { useState } from 'react';
import './App.css';

import Axios from 'axios';

function App() {
  const [joke, setJoke] = useState("")
  const [punch, setPunch] = useState("")
  // const [id, setID] = useState("")

  //Requests GetJoke API (Axios)
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke/")
      .then((response) => {
        console.log(response) //output di console
        // setID(response.data.id)
        setJoke(response.data.setup)
        setPunch(response.data.punchline)
      })
  }

  //Requests GetJoke API (Fetch)
  // const getJokeFetch = () => {
  //   fetch("https://official-joke-api.appspot.com/random_joke/")
  //     .then((response) => (response.json())
  //       .then((data) => {
  //         setID(data.id)
  //       })

  //     )
  // }


  return <>
    <div className='app'>
      <div className="app__title">
        API Get Joke
      </div>
      <div className='app__button'>
        <button onClick={getJoke}>Get</button>
      </div>
      <hr />
      <div className='app__content'>
        {/* {id} */}
        <br />
        {joke}
        <br /><br />
        {punch}
      </div>
    </div>
  </>
}

export default App;
