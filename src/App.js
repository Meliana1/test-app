import './App.css';
import Form from './Views/components/Form';
import Result from './Views/components/Result'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/result" component={Result} />
          <Route path="/" component={Form} />
        </Switch>
    </Router>
  );
}

export default App;
