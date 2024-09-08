
import './App.css';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import Statistics from './components/statistics/Statistics';
import HexColorBlock from './components/hexColorBlock/HexColorBlock';
function App() {
  return (
 <>
 <Navbar></Navbar>
 <Welcome></Welcome>
 <Statistics></Statistics>
 <HexColorBlock></HexColorBlock>
 </>

  );
}

export default App;
