import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from '../Pages/helper/cartHelper';
import { Card, Button } from 'react-bootstrap';

const Cards = ({
	products,
	addtoCart = true,
	removeFromCart = false,
	setReload = (f) => f,
	reload = undefined,
}) => {
	const [redirect, setRedirect] = useState(false);

	const cartTitle = products?.name;
	const cartimg = products?.file?.url;
	const cartprice = products?.product_price?.actual_price;
	const symbol = products?.measurementUnit?.symbol;

	const addToCart = () => {
		addItemToCart(products, () => {
			setRedirect(true);
		});
	};

	const getRedirect = (redirect) => {
		if (redirect) {
			return <Navigate to="/cart" />;
		}
	};
	const showAddToCart = (addtoCart) => {
		return (
			addtoCart && (
				<Button onClick={addToCart} variant="dark">
					Add to cart
				</Button>
			)
		);
	};

	const ShowRemoveFromCart = (removeFromCart) => {
		return (
			removeFromCart && (
				<Button
					onClick={() => {
						removeItemFromCart(products?.id);
						setReload(!reload);
					}}
					variant="dark"
				>
					Remove From Cart
				</Button>
			)
		);
	};
	return (
		<>
			<div className="dark">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<Card
								className="card p-0 overflow-hidden h-100 shawdow "
								style={{
									width: '16rem',
									borderRadius: 55,
								}}
							>
								{getRedirect(redirect)}

								<Card.Img
									className="card-img-top img-fluid  h-50 "
									src={cartimg}
									variant="top"
								/>
								<Card.Body>
									<Card.Title>{cartTitle}</Card.Title>
									<Card.Text>
										Price: Rs {cartprice}/ {symbol}
									</Card.Text>

									<div>{showAddToCart(addtoCart)}</div>
									<div>{ShowRemoveFromCart(removeFromCart)}</div>

									{/* <Button onClick={addToCart} variant="dark">
							Add To Cart
						</Button> */}
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cards;
