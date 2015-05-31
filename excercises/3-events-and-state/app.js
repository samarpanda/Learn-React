var React = require('react');

var ContentToggle = React.createClass({
	getInitialState () {
		return {
			showDetails: false
		};
	},
	toggle () {
		this.setState({
			showDetails: !this.state.showDetails
		}, this.maybeFocus);
	},
	maybeFocus () {
		if(this.state.showDetails)
			this.refs.details.getDOMNode().focus();
	},
	handleKeyboard (event) {
		if(event.key === 'Enter' || event.key === ' ')
			this.toggle();
	},
	render () {
		var details;
		var summaryClassName = 'ContentToggle__Summary';

		if(this.state.showDetails){
			details = this.props.children;
			summaryClassName += ' ContentToggle__Summary--open';
		}

		return (
			<div className="ContentToggle">
				<div
				 tabIndex="0"
				 onClick={this.toggle}
				 onKeyPress={this.handleKeyboard}
				 className={summaryClassName}
				>
					{this.props.summary}
				</div>
				<div
				 ref="details"
				 tabIndex="-1"
				 className="ContentToggle__Details"
				>
					{details}
				</div>
			</div>
		);
	}
});

var App = React.createClass({

	render () {
		return (
			<div>
				<h1>Events and State</h1>
				<ContentToggle summary="Jerk Chicken">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</ContentToggle>
				<ContentToggle summary="Barbecue Chicken">
					<p>Barbecue chicken is often seasoned or coated in a spice rub, barbecue sauce, or both. Marinades are also used to tenderize the meat and add flavor. Rotisserie chicken has gained prominence and popularity in U.S. grocery markets. Barbecued chicken is one of the world most popular barbecue dishes.</p>
				</ContentToggle>
			</div>
		);
	}
});

React.render(<App/>, document.body);