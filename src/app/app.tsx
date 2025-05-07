import ReactDOM from 'react-dom/client';
import React from 'react';
import 'virtual:svg-icons-register';

import './styles/styles.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main } from '@pages/main';
import { Registration } from '@pages/registration';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/registration" element={<Registration />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
