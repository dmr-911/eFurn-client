import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import BootstrapNavbar from './Pages/Shared/BootstrapNavbar/BootstrapNavbar';
import NotFound from './Pages/NotFound/NotFound';
import LogIn from './Pages/Account/LogIn/LogIn';
import SignUp from './Pages/Account/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <BootstrapNavbar></BootstrapNavbar>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="login" element={<LogIn></LogIn>}></Route>
          <Route path="signUp" element={<SignUp></SignUp>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
