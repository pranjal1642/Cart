import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
	const navigate = useNavigate();

	const authentication = getAuth();

	const [data, setdata] = useState({
		email: '',
		password: '',
		loading: false,
	});

	const { loading } = data;
	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Invalid email format')
			.required('Email Required'),
		password: Yup.string().required('Password Required'),
	});

	const handleSubmit = (e) => {
		debugger;
		console.log(e);

		signInWithEmailAndPassword(authentication, e.email, e.password)
			.then((response) => {
				const user = response.user;
				sessionStorage.setItem(
					'Auth Token',
					response._tokenResponse.refreshToken,
				);

				navigate('/products');
			})
			.catch((error) => {
				setdata({ ...data, loading: false });
				alert('Email and Password Does not Found ', error);
			});
	};

	const loadingMessage = () => {
		return (
			loading && (
				<div className="alert alert-info">
					<h2>Loading...</h2>
				</div>
			)
		);
	};

	return (
		<>
			<Formik
				initialValues={data}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="login-wrapper">
								<div className="loginbox m-10 p-0 mb-1">
									<div className="login-left">
										<img
											className="img-fluid "
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQUAAABECAYAAACI5SDsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUFFMzZFOEQzMDgxMTFFQjgyNUVDRTdGQ0I4MjAzQjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUFFMzZFOEUzMDgxMTFFQjgyNUVDRTdGQ0I4MjAzQjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQUUzNkU4QjMwODExMUVCODI1RUNFN0ZDQjgyMDNCMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQUUzNkU4QzMwODExMUVCODI1RUNFN0ZDQjgyMDNCMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjG7FoAAABPXSURBVHja7F0JtE/V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"
											alt="Logo"
										/>
									</div>
									<div className="login-right">
										<div className="login">
											<h1 className="text-center">Login</h1>
											{loadingMessage()}
											<Form>
												<div className="form-group">
													<Field
														className="form-control"
														type="email"
														placeholder="Email"
														name="email"
													/>
													<small className=" text-danger m-2">
														<ErrorMessage name="email" />
													</small>
												</div>
												<div className="form-group">
													<Field
														className="form-control"
														type="password"
														name="password"
														placeholder="Password"
													/>
													<small className=" text-danger m-2">
														<ErrorMessage name="password" />
													</small>
												</div>
												<div className="form-group">
													<button
														type="submit"
														className="btn btn-success btn-block"
													>
														Login
													</button>
												</div>
											</Form>

											<div className="text-center dont-have">
												Don???t have an account?
												<Link to={`/Register`}>Register</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Formik>
		</>
	);
};

export default Login;
