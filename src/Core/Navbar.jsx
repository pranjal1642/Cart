import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav class="navbar navbar-expand-lg bg-light">
				<div class="container-fluid">
					<a class="navbar-brand fw-bold fs-4" href="#">
						Ecommerce
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<Link to={'/products'} class="nav-link" href="#">
									Products
								</Link>
							</li>
							<li class="nav-item">
								<Link to={'/cart'} class="nav-link" href="#">
									<i className="fa fa-shopping-cart"></i>
									Cart
								</Link>
							</li>
						</ul>

						<button className="btn btn-light text-decoration-none">
							<Link to={'/'}>Logout</Link>
						</button>
					</div>
				</div>
			</nav>
			<div className="container">
				<div className="row">
					<div className="col">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
