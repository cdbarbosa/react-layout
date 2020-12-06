import React from 'react'

import HeroComponent from './components/HeroComponent'
import SliderComponent from './components/SliderComponent'
import InformationComponent from './components/InformationComponent'
import ColapseComponent from './components/ColapseComponent'
import ContactComponent from './components/ContactComponent'
import { Footer, FooterTitle } from './components/footer'

const App = () => {
  return (
    <div className="App">
      <HeroComponent />
      <SliderComponent />
      <InformationComponent />
      <ColapseComponent />
      <ContactComponent />
      <Footer>
        <FooterTitle>Lorem Ipsum</FooterTitle>
      </Footer>
    </div>
  );
}

export default App;
