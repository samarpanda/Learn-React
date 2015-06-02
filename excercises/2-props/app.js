var React = require('react');
var md5 = require('MD5');
var warning = require('react/lib/warning');
var validateEmail = require('./validateEmail');

var GRAVATAR_URL = "http://gravatar.com/avatar";
var USERS = [
	{ id: 1, name: "Rayn Florence", email: 'rpflorence@gmail.com' },
	{ id: 2, name: "Mickel Jackson", email: 'mjijackson@gmail.com' },
	{ id: 3, name: "Samar Panda", email: 'samar.panda84@gmail.com' }
];

var emailType = (props, propName, componentName) => {
	warning(
		validateEmail(props.email),
		`Invalid email '${props.email}' sent to 'Gravatar'. Check the render method of '${componentName}'.`
	);
};

var sizeType = (props, propName, componentName) => {
	warning(
		!isNaN(parseInt(props[propName])),
		`Invalid '${propName}' cannot convert "${props[propName]}" to number. Check the render method of '${componentName}'.`
	);
};

var Gravatar = React.createClass({
	propTypes: {
		user: React.PropTypes.shape({
			email: emailType,
			name: React.PropTypes.string.isRequired,
			id: React.PropTypes.number.isRequired
		}).isRequired,
		size: sizeType
	},

	getDefaultProps () {
		return {
			size: 16
		};
	},

	render() {
		var { user, size } = this.props;
		var hash = md5(user.email);
		var url = `${GRAVATAR_URL}/${hash}?s=${size*2}`;
		return <img src={url} width={size} />;
	}
});

var App = React.createClass({
	render() {
		var users = this.props.users.map((user) => {
			return (
				<li key={user.id}><Gravatar user={user} size={36} />{user.name}</li>
			);
		});
		return (
		<div>
			<h1>Users</h1>
			<ul>{users}</ul>
		</div>
		);
	}
});

React.render(<App users={USERS} />, document.body, () => {
	require('./tests').run();
});