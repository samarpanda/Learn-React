var React = require('react');

var {h1, div, li, ul} = React.DOM;

var numbers = ['one', 'two', 'three'];

var items = numbers.map(item => li({}, item));

var App = React.createClass({
	render (){
		return (
			<div>
				<h1>Hello from Composite Component</h1>
				<ul>
					{items}
				</ul>
			</div>
		);
	}
});

React.render(<App/>, document.body);