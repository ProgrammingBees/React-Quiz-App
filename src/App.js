import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from './components/contexts/AuthContext';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Quiz from './components/pages/Quiz';
import Result from './components/pages/Result';
import Signup from './components/pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import "./styles/App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
          <Route exact path="/" component={Home}/>
          <PublicRoute exact path="/signup"component={Signup}/>
          <PublicRoute exact path="/login" component={Login}/>
          <PrivateRoute exact path="/quiz/:id" component={Quiz}/>
          <PrivateRoute exact path="/result/:id" component={Result}/>
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
// Hai,Your watching lecture-43,Part-16 and video length 00min😀😀
