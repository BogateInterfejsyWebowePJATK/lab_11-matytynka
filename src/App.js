import RandomNumbers from "./components/randomNumbers"
import './App.css'

function App() {
  return (
    <div className="App">
      <RandomNumbers max={20} min={1} size={10}/>
    </div>
  );
}

export default App;
