import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import logodifreedcodecamp from './image/freedcodecampnero.png' ;
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const clickOnTheHandle = () => {
    setNumClics(numClics + 1);
  }

  const resetCounter = () =>{
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
        className='freedcodecamp-logo'
        src={logodifreedcodecamp}
        alt='freedcodecamp Logo' />
      </div>
      <div className='container-principal'>
        <Counter numClics = {numClics} />
        <Button 
         text='Clic'
         buttonclick={true}
         clickOnTheHandle={clickOnTheHandle} />
        <Button 
        text='restart'
        buttonclick={false}
        clickOnTheHandle={resetCounter} />
      </div>
    </div>
  );
}

export default App;
