import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect, Route, Switch } from 'react-router-dom';

import { aboutProjectRoute } from '../../utils/routes/rotues';
import AboutProject from './components/about-project';
import {LandingTranslations} from './context/landing.translations';

const Landing: FC = () => {
  const { t: translate } = useTranslation();
  return (
    <>
      <h1 className="text-3xl text-center bg-gray-200 text-gray-800 p-6">{translate(LandingTranslations.title)}</h1>
      <Switch>
        <Route path={aboutProjectRoute()} component={AboutProject} />
        <Redirect to={aboutProjectRoute()} />
      </Switch>
    </>
  );
};

export default Landing;
