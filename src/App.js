import Login from "./components/Login/Login";
import Signup from "./components/Signup/SignUp";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Profile from "./Pages/ProfilePage";
import EditProfile from "./components/Profile/EditProfile";
import PrivateRouter from "./PrivateRouter";
import ForgotPassword from './components/ForgotPassword'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRouter exact path="/" component={Home} />
            
            <PrivateRouter path="/editprofile" component={EditProfile} />

            <Route path="/login" component={Login} />

            <Route path="/signup" component={Signup} />

            <PrivateRouter path="/profile" component={Profile} />

            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
