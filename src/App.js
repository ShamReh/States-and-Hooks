
import './App.css';
import MilesAhead from './MilesAhead';
import Clock from './Clock';
import Login from './UserLogin';
import Car from './Car';
import ProductTable from './ProductTable';
import Game from './Game';
import ProductManager from './ProductManager';

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
</div>
  
  );
}

export default App;
