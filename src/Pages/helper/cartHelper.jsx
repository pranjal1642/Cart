export const addItemToCart = (products, next) => {
	let cart = [];
	if (typeof window !== undefined) {
		if (localStorage.getItem('cart')) {
			cart = JSON.parse(localStorage.getItem('cart'));
		}
		cart.push({
			...products,
			count: 1,
		});
		localStorage.setItem('cart', JSON.stringify(cart));
		next();
	}
};
export const loadCart = () => {
	if (typeof window !== undefined) {
		if (localStorage.getItem('cart')) {
			return JSON.parse(localStorage.getItem('cart'));
		}
	}
};
export const removeItemFromCart = (productId) => {
	let cart = [];
	if (typeof window !== undefined) {
		if (localStorage.getItem('cart')) {
			cart = JSON.parse(localStorage.getItem('cart'));
		}
		cart.map((products, i) => {
			if (products.id === productId) {
				cart.splice(i, 1);
			}
		});
		localStorage.setItem('cart', JSON.stringify(cart));
	}
	return cart;
};
