import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Overview, Users, Revenue } from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Products from './pages/Products';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/overview" exact component={Overview} />
        <Route path="/overview/users" exact component={Users} />
        <Route path="/overview/revenue" exact component={Revenue} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
        <Route path="/products" exact component={Products} />
        <Route path="/team" exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
