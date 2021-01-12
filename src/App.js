import RandomNumbers from "./components/randomNumbers";

function App() {
  return (
    <div className="App">
      <RandomNumbers max={20} min={1} size={10}/>
    </div>
  );
}

export default App;
