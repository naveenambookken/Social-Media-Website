import Login from "./components/Login/Login";
import Signup from "./components/Signup/SignUp";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Write from './Pages/write/Write'
import Single from './Pages/single/Single'
import Topbar from './components/topbar/Topbar'
import { useAuth } from "./Context/AuthContext";
import Settings from './Pages/settings/Settings'

function App() {
  const { currentUser } = useAuth();
  return (
    
      <Router>
        
        <Topbar>{
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/posts">
              <Home />
            </Route>
            <Route path="/signup">
              {currentUser ? <Home /> : <Signup />}
            </Route>
            <Route path="/login">
              {currentUser ? <Home /> : <Login />}
            </Route>
            <Route path="/post/:id">
              <Single />
            </Route>
            <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
            <Route path="/settings">
              {currentUser ? <Settings /> : <Login />}
            </Route>
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
          }</Topbar>
        
      </Router>
    
  );
}

export default App;
