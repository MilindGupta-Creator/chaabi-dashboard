import './App.css';
import LeftSide from './Component/LeftSide/LeftSide';
import RightSide from './Component/LeftSide/RightSide/RightSide';

function App() {
  return (
    <div style={{display:"flex"}} className="App">
      <LeftSide/>
      <RightSide/>
    </div>
  );
}

export default App;
