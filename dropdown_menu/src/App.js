import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import Design from "./components/pages/Design";
import Development from "./components/pages/Development";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/marketing" exact component={Marketing} />
          <Route path="/consulting" exact component={Consulting} />
          <Route path="/design" exact component={Design} />
          <Route path="/development" exact component={Development} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
