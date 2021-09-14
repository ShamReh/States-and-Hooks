
import './App.css';
import MilesAhead from './MilesAhead';
import Clock from './Clock';
import Login from './UserLogin';
import Car from './Car';
import ProductTable from './ProductTable';
import Game from './Game';
import ProductManager from './ProductManager';
import Shopping from './Shopping';
import LessText from './LessText';
import Greet from './Greet';


const App = () => {
  return (
<div className="App">
<MilesAhead/>
<br></br>
<Clock/>
<br></br>
<Login/>
<br></br>
<Car/>
<br></br>
<ProductTable/>
<br></br>
<Game/>
<br></br>
<ProductManager/>
<br></br>
<Shopping/>
<br></br>
<LessText maxLength={15} text="Hello I am a piece of text"/>
<br></br>
<Greet name="Sham"/>
</div>
  
  );
}

export default App;
