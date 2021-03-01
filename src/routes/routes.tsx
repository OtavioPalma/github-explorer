import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Repository } from '../pages/Repository/Repository';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repository" component={Repository} />
    </Switch>
  </BrowserRouter>
);
