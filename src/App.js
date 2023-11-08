
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Spetsalist from "./pages/Spetsalist";
import Filyal_mark from "./pages/Filyal_mark";
import Xususiyat from "./pages/Xususiyat";
import Tables from "./pages/Tables";
import Mutahasis_time from "./pages/Mutahasis_time";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
// Mutahasis_time
// Xususiyat
function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Filyal_mark" component={Filyal_mark} />
        <Route exact path="/Xususiyat" component={Xususiyat} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/Spetsalist" component={Spetsalist} />
          <Route exact path="/Mutahasis_time" component={Mutahasis_time} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="/Product" to="/Product" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
