var React = require('react');
var assign = require('react/lib/Object.assign');

var DATA = [
  { name: 'USA', description: 'Land of the Free, Home of the brave' },
  { name: 'China', description: 'Lots of concrete' },
  { name: 'Russia', description: 'World Cup 2018!' },
];

var App = React.createClass({
	getInitialState() {
		return {
			activeTabIndex: 0
		}
	},
	handleTabClick (activeTabIndex) {
		this.setState({
			activeTabIndex
		});
	},
	renderTabs () {
		return this.props.countries.map((country, index) => {
			var clickHandler = this.handleTabClick.bind(this, index);
			return (
				<div key={index} onClick={clickHandler} className={index === this.state.activeTabIndex ? 'activeTab' : 'tab'}>
					{country.name}
				</div>
			);
		});
	},
	renderPanels () {
		var country = this.props.countries[this.state.activeTabIndex];
		return (
			<div>
				<p>{country.description}</p>
			</div>
		);
	},
	render () {
		return (
			<div>
				<div>
					{this.renderTabs()}
				</div>
				<div>
					{this.renderPanels()}
				</div>
			</div>
		);
	}
});

React.render(<App countries={DATA}/>, document.body);