import React from 'react';
import '../css/App.css';
import { RippleBadge } from './MaterialTheme/styled';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import AgentsPage from './screens/AgentsPage';
import DestinationsPage from './screens/DestinationsPage';
import ToursPage from './screens/ToursPage';
import OrdersPage from './screens/OrdersPage';
import CommunityPage from './screens/CommunityPage';
import HelpPage from './screens/HelpPage';

function App() {
  return (
    <Container>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">HomePage</Link>
              </li>
              <li>
                <Link to="/login-page">LoginPage</Link>
              </li>
              <li>
                <Link to="/signup-page">SignupPage</Link>
              </li>
              <li>
                <Link to="/agents-page">AgentsPage</Link>
              </li>
              <li>
                <Link to="/destinations-page">DestinationsPage</Link>
              </li>
              <li>
                <Link to="/tours-page">ToursPage</Link>
              </li>
              <li>
                <Link to="/orders-page">OrdersPage</Link>
              </li>
              <li>
                <Link to="/community-page">CommunityPage</Link>
              </li>
              <li>
                <Link to="/help-page">HelpPage</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/login-page">
              <LoginPage />
            </Route>
            <Route path="/signup-page">
              <SignupPage />
            </Route>
            <Route path="/agents-page">
              <AgentsPage />
            </Route>
            <Route path="/destinations-page">
              <DestinationsPage />
            </Route>
            <Route path="/tours-page">
              <ToursPage />
            </Route>
            <Route path="/orders-page">
              <OrdersPage />
            </Route>
            <Route path="/community-page">
              <CommunityPage />
            </Route>
            <Route path="/help-page">
              <HelpPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
