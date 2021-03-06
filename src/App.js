import React from 'react';
import Card from './Card';
import './css/app.css';


function App() {

  const cardDetails = require('./data/cardDetails').default
 
  return (
    <div className="container">
      <div className="card-head-container"> <h1 className="card-head">Cards</h1></div>
     
    <div className="App">
      
      {
        cardDetails.map((data,index) => (

          <Card key={index} title={data.title} subtitle={data.sub} image={data.cardimage} desc={data.desc}/>
        ))
      
      }
    </div>
    </div>
  );
}

export default App;
