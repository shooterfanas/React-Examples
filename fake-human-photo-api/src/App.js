import './App.css';
import React, { useState} from 'react'
import axios from 'axios';

function App() {
  const [img,setImg]=useState('');

  //Please visit "https://generated.photos/" and get an api key for YOUR_API part to run the project.
  const handleChange=() => {
    axios.get('https://api.generated.photos/api/v1/faces?api_key=YOUR_API&order_by=random')
    .then(res=>{
      const uri= res.data.faces[0].urls[4][512]
      uri && setImg(uri);
    }).catch(err=>{
      console.log(err.message);
    })
  }
  return (
    <div className="App">
      <h1>Fake Human Photo Generater</h1>
      {img && <img src={img} alt='img'/> }<br/>
      <button type='button' onClick={handleChange}>New Image</button>
    </div>
  );
}

export default App;

