var { ActionTypes } = require('../Constants');
var AppDispatcher = require('../AppDispatcher');
var ApiUtil = require('../utils/ApiUtil');

var ViewActionCreators = {
	loadContacts () {
		AppDispatcher.handleViewAction({
			type: ActionTypes.LOAD_CONTACTS
		});
		ApiUtil.loadContacts();
	},
	deleteContact(contact) {
		
	}
};

module.exports = ViewActionCreators;