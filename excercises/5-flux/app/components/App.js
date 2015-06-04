var React = require('react');
var ContactsStore = require('../stores/ContactsStore');
var ViewActionCreators = require('../actions/ViewActionCreators');

var App = React.createClass({
	getInitialState () {
		return ContactsStore.getState();
	},
	componentDidMount () {
		ContactsStore.addEventListener(this.handleStoreChange);
		ViewActionCreators.loadContacts();
	},
	componentWillUnmount () {
		ContactsStore.removeChangeListener(this.handleStoreChange);
	},
	handleStoreChange () {}
});