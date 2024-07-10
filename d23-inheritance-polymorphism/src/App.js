
import './App.css';
import Lion from './classes/Lion';
import LionCubs from './classes/LionCubs';

function App() {
  
  let roar=new Lion();
  
  roar.foodBehaviour();
  roar.sleepingBehaviour();
  roar.facingHuman();
console.log(`-----------------------------------------`)
  let cubs=new LionCubs();
  cubs.foodBehaviour();
  cubs.sleepingBehaviour();
  cubs.facingHuman();
  cubs.walking();

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
