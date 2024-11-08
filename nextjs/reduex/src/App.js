// import logo from './logo.svg';
import './App.css';
import Example from './Components/Calender';
import Chart from './Components/Chart';
import NavBar from './Components/NavBar';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserDetails />
      <Chart />
      {/* <Example /> */}
    </div>
  );
}

export default App;
