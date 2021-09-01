import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import { Home, Breed, Breeds } from 'App/index';
import { Container, Logo } from 'shared';
import { Footer } from 'shared/footer/Footer';
import { setBreedsData } from 'actions/breeds';
import { setLoading } from 'actions/ui';

const BASE_URL = 'https://api.thecatapi.com/v1';

export const AppRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getBreedsData = async () => {
			try {
				// Iniciamos loading
				dispatch(setLoading(true));

				const res = await axios.get(`${BASE_URL}/breeds`, {
					params: {
						api_key: process.env.REACT_APP_CAT_APIKEY,
					},
				});

				dispatch(setBreedsData(res.data));
			} catch (error) {
				toast.error('Error trying to get the cats data :/');
			} finally {
				// Finalizamos loading
				dispatch(setLoading(false));
			}
		};

		getBreedsData();
	}, [dispatch]);

	return (
		<Router>
			<Container>
				<Logo />

				<Switch>
					<Route exact path="/home" component={Home} />
					<Route exact path="/breeds" component={Breeds} />
					<Route exact path="/breeds/:breedId" component={Breed} />

					<Redirect to="/home" />
				</Switch>
			</Container>

			<Footer />
		</Router>
	);
};
