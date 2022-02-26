import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import CustomNavbar from './Pages/Shared/CustomNavbar/CustomNavbar';
import BootstrapNavbar from './Pages/Shared/BootstrapNavbar/BootstrapNavbar';

function App() {
  return (
    <div className="App">
      <Router>
        <BootstrapNavbar></BootstrapNavbar>
        {/* <CustomNavbar></CustomNavbar> */}
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
