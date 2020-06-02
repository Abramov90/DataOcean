import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReactRouterPropTypes from 'utils/react-router-prop-types';
import AnalyticsPage from 'components/pages/system/AnalyticsPage';
import ConstructorPage from 'components/pages/system/ConstructorPage';
import ContactsPage from 'components/pages/system/ContactsPage';
import DocumentsPage from 'components/pages/system/DocumentsPage';
import Route404 from 'components/pages/Route404';
import HelpPage from 'components/pages/system/HelpPage';
import DashboardPage from 'components/pages/system/DashboardPage';
import HomePage from 'components/pages/system/HomePage';

const SystemRoutes = (props) => {
  const { match } = props;
  return (
    <Switch>
      {/* TODO: make constructor routes */}
      <Route
        exact
        path={`${match.path}constructor/my-data/`}
        component={ConstructorPage}
      />
      <Route
        exact
        path={`${match.path}constructor/datasets/`}
        component={ConstructorPage}
      />
      <Route
        exact
        path={`${match.path}documents/`}
        component={DocumentsPage}
      />
      <Route
        exact
        path={`${match.path}contacts/`}
        component={ContactsPage}
      />
      <Route
        exact
        path={`${match.path}analytics/`}
        component={AnalyticsPage}
      />
      <Route
        exact
        path={`${match.path}help/`}
        component={HelpPage}
      />
      <Route
        exact
        path={`${match.path}dashboard/`}
        component={DashboardPage}
      />
      <Route
        exact
        path={`${match.path}home/`}
        component={HomePage}
      />
      <Route
        exact
        path={match.path}
        render={() => <Redirect to={`${match.path}help/`} />}
      />
      <Route404 />
    </Switch>
  );
};

SystemRoutes.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default SystemRoutes;