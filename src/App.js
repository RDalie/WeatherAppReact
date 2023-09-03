import Header from './components/Header';
import ImageCustom from './components/UI/ImageCustom';
import WeatherDisplay from './components/WeatherDisplay';
import classes from './App.module.css'
import { useState } from 'react';
  function App() {
    const [location, setLocation] = useState('Paris');
  const changeLocation = (loc) => {

    setLocation(loc);
    
  }

  return (
    <div className="App">
      <ImageCustom location={location}>
        <Header changeLocation={changeLocation}/>
        <div className={classes.center}>
        <WeatherDisplay location={location}/>
        </div>
        </ImageCustom>
        
    </div>
  );
}

export default App;
