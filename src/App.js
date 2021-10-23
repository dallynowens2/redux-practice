import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Login from './Components/Login';
import LoginText from './Components/LoginText';
import Logout from './Components/Logout';
import LogoutText from './Components/LogoutText'


function App() {
  const loggedInState = useSelector(state => state.ui.currencyIsVisible)

  return (
    <div className="container">
      {loggedInState ? <div><LoginText/><Login/></div>:<div> <LogoutText/><Logout/></div>}
    </div>
  );
}

export default App;
