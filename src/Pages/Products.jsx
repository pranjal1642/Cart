import React, { useState, useEffect } from 'react';
import Cards from '../Components/Cards';
import { getProducts } from './helper/productapi';

const Item = () => {
	const [pdata, setPdata] = useState([]);
	const [error, setError] = useState(false);
	const [filteredResults, setFilteredResults] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	const searchItems = (searchValue) => {
		setSearchInput(searchValue);

		if (searchInput !== '') {
			const filteredData = pdata.products.filter((val) => {
				return Object.values(val)
					.join('')
					.toLowerCase()
					.includes(searchInput.toLowerCase());
			});
			setFilteredResults(filteredData);
		} else {
			setFilteredResults(pdata);
		}
	};

	const loadAllProduct = async () => {
		getProducts().then((data) => {
			console.log(data);
			if (data?.error) {
				setError(data.error);
			} else {
				setPdata(data);
			}
		});
	};

	useEffect(() => {
		loadAllProduct();
	}, []);

	return (
		<>
			<input
				class="form-control mb-4 mt-4"
				type="search"
				placeholder="Search..."
				aria-label="Search"
				onChange={(e) => searchItems(e.target.value)}
			/>
			{searchInput.length > 1
				? filteredResults.map((product) => {
						return <Cards products={product} />;
				  })
				: pdata.products?.map((product, id) => {
						return (
							<>
								<div key={id} className="container">
									<Cards products={product} />
								</div>
							</>
						);
				  })}
		</>
	);
};

export default Item;
