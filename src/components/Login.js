import React from "react";

const Login = () => (
	<div className="ui middle aligned center aligned grid">
		<div className="column">
			<h2 className="ui teal image header">
				<div className="content">Log-in to your account</div>
			</h2>
			<form className="ui large form">
				<div className="ui stacked segment">
					<div className="field">
						<div className="ui left icon input">
							<i className="user icon" />
							<input
								type="text"
								name="email"
								placeholder="E-mail address"
							/>
						</div>
					</div>
					<div className="field">
						<div className="ui left icon input">
							<i className="lock icon" />
							<input
								type="password"
								name="password"
								placeholder="Password"
							/>
						</div>
					</div>
					<div className="ui fluid buttons">
						<button className="ui button primary" type="submit">
							Login
						</button>
						<div className="or" />
						<button className="ui button " type="submit">
							sign up
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
);

export default Login;
