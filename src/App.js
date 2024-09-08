
import './App.css';
import Navbar from './components/navbar/Navbar';
// import Navbar2 from './components/navbar2/Navbar2';
import Welcome from './components/welcome/Welcome';
import Statistics from './components/statistics/Statistics';
import HexColorBlock from './components/hexColorBlock/HexColorBlock';
function App() {
  return (
 <>
 <Navbar></Navbar>
 {/* <Navbar2></Navbar2> */}
 <Welcome></Welcome>
 <Statistics></Statistics>
 <HexColorBlock></HexColorBlock>
 </>

  );
}

export default App;
