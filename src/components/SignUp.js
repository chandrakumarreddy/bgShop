import React from "react";

const SignUp = () => (
	<div className="ui middle aligned center aligned grid">
		<div className="column">
			<h2 className="ui teal image header">
				<div className="content">Sign up here</div>
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
					<div className="ui fluid large teal submit button">
						Sign up
					</div>
				</div>
			</form>
		</div>
	</div>
);

export default SignUp;
