var React = require('react');
var styles = require('./styles');
var data = require('./data');

var Tabs = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired,
		activeTabIndex: React.PropTypes.number.isRequired,
		onActivateTab: React.PropTypes.func.isRequired
	},
	handleTabsClick (activeTabIndex) {
		this.props.onActivateTab(activeTabIndex);
	},
	renderTabs () {
		return this.props.data.map((tab, index) => {
			var clickHandler = this.handleTabsClick.bind(this, index);
			return (
				<div key={index} onClick={clickHandler} className={index === this.props.activeTabIndex ? 'activeTab' : 'tab'}>
					{tab.name}
				</div>
			);
		});
	},
	renderPanel () {
		var tab = this.props.data[this.props.activeTabIndex];
		return <div>
			<p>{tab.description}</p>
		</div>;
	},
	render () {
		return (
			<div>
				<div>{this.renderTabs()}</div>
				<div>{this.renderPanel()}</div>
			</div>
		);
	}
});

var App = React.createClass({
	getInitialState () {
		return {
			activeTabIndex: 0
		};
	},
	handleActivateTab (activeTabIndex) {
		this.setState({
			activeTabIndex
		});
	},
	render () {
		return (
			<div>
				<h1>Props vs State</h1>
				<Tabs
				 activeTabIndex={this.state.activeTabIndex}
				 onActivateTab={this.handleActivateTab}
				 data={this.props.tabs} />
			</div>
		);
	}
});

React.render(<App tabs={data}/>, document.body);