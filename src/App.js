import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import Login from "./Components/Login";
import LoginText from "./Components/LoginText";
import Logout from "./Components/Logout";
import LogoutText from "./Components/LogoutText";
//import { getCurrencyData } from "./Store/currency-slice";
//import { useDispatch } from "react-redux";
//import { currencyActions } from "./Store/currency-slice";
import { getCurrenciesList } from "./services/CoinbaseServices";
import Currency from "./Components/Currency";

function App() {
  const loggedInState = useSelector((state) => state.ui.currencyIsVisible);

  const [currencyList, setCurrencyList] = useState(["", ""]);

  useEffect(() => {}, []);

  console.log(currencyList);

  return (
    <div>
      <div>
        {loggedInState ? (
          <div >
            <div className="container-fluid p-5 bg-primary text-white text-center">
              <LoginText />
              <div>
                <Login />
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid p-5 bg-primary text-white text-center">
            
            <LogoutText />
            <Logout />
          </div>
        )}
      </div>
      <Currency currencies={currencyList} />
    </div>
  );
}

export default App;
