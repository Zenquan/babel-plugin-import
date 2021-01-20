import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '../../pages/Loading/Loading';

const Home = lazy(() => import('../../pages/Home/Home'));
const PageNotFound = lazy(() => import('../../pages/PageNotFound/PageNotFound'));

export const Routes: FC = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={PageNotFound} />
    </Switch>
  </Suspense>
);
