export const getProducts = () => {
	return fetch(
		`${`http://rocket-delivery-api.herokuapp.com/user/product/list?category_id=1&sub_category_id=1&page=0&limit=14`}`,
	)
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
