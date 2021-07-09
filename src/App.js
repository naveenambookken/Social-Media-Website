import './App.css';
import Login from './components/Login/Login'
import Signup from './components/Signup/SignUp'
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/login">
          <Login/>
        </Route>
        <Route  path="/signup">
          <Signup/>
        </Route>
      </Router>

      
      
    </div>
  );
}

export default App;
