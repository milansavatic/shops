import React, { useState } from 'react';
import Fother from './components/Fother';
import NavBar from './components/NavBar';
import Admin from './pages/Admin';
import Card from './pages/Card';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Single from './pages/Single';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';


function App() {

  //1.Pravim dinamicki samo 3 carta

  const[items, setItems]=useState([
    {
      id:1,
      title:'T-Skirt',
      price:39,
      desc:'Some quick example text to build on the card title and make up the bulk of the cards content.',
      qty:4,
      img:"img/image1.jpg"
    },
    {
      id:2,
      title:'Traveller bag',
      price:70,
      desc:'Some quick example text to build on the card title and make up the bulk of the cards content.',
      qty:8,
      img:"img/image2.jpg"
    },
    {
      id:1,
      title:'Sunglasses',
      price:55,
      desc:'Some quick example text to build on the card title and make up the bulk of the cards content.',
      qty:5,
      img:"img/image3.jpg"
    },
  ]);
  {/*8. dodajem Card*/}
  let {singleId}=useParams();
  const[card, setCard]=useState([]);

    return ( 
    <BrowserRouter>
    <div>
      <NavBar card={card}/>
    
    <Routes>
      <Route path="/" element={<Home items={items} card={card} setCard={setCard}/>}/>
      <Route path="/single" element={<Single items={items} card={card} setCard={setCard}/>} >
              <Route path=":singleId" element={<Single/>} />
          </Route>
        <Route path="/admin" element={<Admin items={items} setItems={setItems}/>}/>
        <Route path="/card" element={<Card card={card} setCard={setCard}/>}/>
        <Route path="*" element={<NotFound/>}/>

    </Routes>
    <Fother/>
    </div>
  </BrowserRouter>
        
);
}

export default App;