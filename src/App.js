import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Core/Navbar';
import Login from './Pages/Login';
import { firebaseConfig } from './Firebase/firebaseconfig';

import firebase from 'firebase/compat/app';
import Register from './Pages/Register';
import Cards from './Components/Cards';
import Cart from './Components/Cart';
import Item from './Pages/Products';

firebase.initializeApp(firebaseConfig);

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<>
						<Route element={<Navbar />}>
							<Route path="/products" element={<Item />} />
							<Route path="/cart" element={<Cart />} />
						</Route>
					</>

					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
