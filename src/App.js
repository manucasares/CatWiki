import React from 'react';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from './routes/AppRouter';
import { store } from './store/store';
import { theme } from 'styles/themes';

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</ThemeProvider>
	);
};
