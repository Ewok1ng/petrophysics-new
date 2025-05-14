import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'virtual:svg-icons-register';

import './styles/styles.scss';

import { Main } from '@pages/main';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
