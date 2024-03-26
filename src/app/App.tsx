import React, { useState } from 'react';
import '../css/App.css';
import '../css/navbar.css';
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
import OtherPagesNavbar from './components/header/others';
import HompePageHeader from './components/header';
import Footer from './components/footer';

function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  console.log('main_path', main_path);

  return (
      <Router>
        {
          main_path == '/'
            ? <HompePageHeader setPath={setPath} />
            : <OtherPagesNavbar setPath={setPath} />
        }

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
        <Footer/>
      </Router>
  );
}

export default App;
