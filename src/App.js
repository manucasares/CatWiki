import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from './routes/AppRouter';
import { store } from './store/store';
import { theme } from 'styles/themes';
import { AppWrapper } from 'shared/layout/App';

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<AppWrapper>
					<Toaster />
					<AppRouter />
				</AppWrapper>
			</Provider>
		</ThemeProvider>
	);
};
