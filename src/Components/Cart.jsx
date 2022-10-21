import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { loadCart } from '../Pages/helper/cartHelper';
import { Card, ModalBody } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const Cart = () => {
	const [product, setProduct] = useState([]);
	const [reload, setReload] = useState(false);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		setProduct(loadCart());
	}, [reload]);

	const loadAllProducts = (product) => {
		console.log(product?.product_price?.actual_price, 'hhb');
		let amount = 0;
		product?.forEach((item) => {
			amount =
				parseFloat(amount) + parseFloat(item?.product_price?.actual_price);
		});

		const handleDecrement = (productId) => {
			setProduct((product) => {
				product.map((item) =>
					item.id === productId
						? {
								...item,
								minimum_cart_quantity:
									item.minimum_cart_quantity -
									(item.minimum_cart_quantity > 1 ? 1 : 0),
						  }
						: item,
				);
			});
		};
		const handleIncrement = (productId) => {
			setProduct((product) => {
				product?.map((item) =>
					item.id === productId
						? {
								...item,
								minimum_cart_quantity:
									item.minimum_cart_quantity +
									(item.minimum_cart_quantity < 10 ? 1 : 0),
						  }
						: item,
				);
			});
		};

		return (
			<>
				<div className="container">
					<div className="row mt-4">
						<div className="col-5">
							{product?.map((products, index) => {
								return (
									<>
										<Cards
											key={index}
											products={products}
											removeFromCart={true}
											addtoCart={false}
											setReload={setReload}
											reload={reload}
										/>
									</>
								);
							})}
						</div>
						<div className="col-3">
							{product?.map((products) => {
								return (
									<>
										<div className="input-group mt-5">
											<button
												type="button"
												onClick={() => {
													handleDecrement(products?.id);
												}}
												className="input-group-text"
											>
												-
											</button>
											<div className="form-control text-center">
												{products?.minimum_cart_quantity}
											</div>
											<button
												type="button"
												onClick={() => {
													handleIncrement(products.id);
												}}
												className="input-group-text"
											>
												+
											</button>
										</div>
									</>
								);
							})}
							;
						</div>
						<div className="col-4">
							{product?.length >= 1 ? (
								<Card className="text-center  mt-3 mb-4">
									<CardHeader>Grand Total</CardHeader>
									<ModalBody>
										Your amount for {product.length} Products is Rs {amount}
									</ModalBody>
								</Card>
							) : (
								<h1 className="text-dark">Cart is empty</h1>
							)}
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<div>{loadAllProducts(product)}</div>
		</>
	);
};

export default Cart;
