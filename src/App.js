import Login from './components/Login/Login'
import Signup from './components/Signup/SignUp'
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { AuthProvider } from './Context/AuthContext';
import Profile from './Pages/ProfilePage';


function App() {
  return (
    

    <div className="App">
      <Router>
      <AuthProvider>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/login">
          <Login/>
        </Route>
        <Route  path="/signup">
          <Signup/>
        </Route>
        <Route  path="/profile">
          <Profile/>
        </Route>
        </AuthProvider>
      </Router>

      
      
    </div>
    
  );
}

export default App;
