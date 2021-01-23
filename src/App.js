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
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
          <Route exact path="/result" component={Result} />
          <Route exact path="/" component={Form} />
        </Switch>
    </Router>
  );
}

export default App;
