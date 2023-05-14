import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Component/Map.js';
import Data from './Component/Data.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Map />
    <Data/>
  </div>
);