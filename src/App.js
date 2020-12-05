import React from 'react'

import HeroComponent from './components/HeroComponent'
import SliderComponent from './components/SliderComponent'
import InformationComponent from './components/InformationComponent'
import ColapseComponent from './components/ColapseComponent'
import ContactComponent from './components/ContactComponent'

const App = () => {
  return (
    <div className="App">
      <HeroComponent />
      <SliderComponent />
      <InformationComponent />
      <ColapseComponent />
      <ContactComponent />
      <div className="footer" style={{ height: '50px', width: '100%', padding: '1rem', backgroundColor: '#343434', textAlign: 'center'}}>
        <h4 style={{ textTransform: 'uppercase', color: '#fff', fontWeight: '600'}}>Lorem Ipsum</h4>
      </div>
    </div>
  );
}

export default App;
