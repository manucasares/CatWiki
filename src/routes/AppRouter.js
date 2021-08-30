import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import { Home, Breed, TopTen } from 'App/index';
import { Container, Logo } from 'shared';
import { Footer } from 'shared/footer/Footer';

export const AppRouter = () => {
	return (
		<Router>
			<Container>
				<Logo />

				<Switch>
					<Route exact path="/home" component={Home} />
					<Route exact path="/breeds/:breedId" component={Breed} />
					<Route exact path="/topten" component={TopTen} />

					<Redirect to="/home" />
				</Switch>
			</Container>

			<Footer />
		</Router>
	);
};
