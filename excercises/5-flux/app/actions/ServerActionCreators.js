var { ActionTypes } = require('../Constants');
var AppDispatcher = require('../AppDispatcher');

var ServerActionCreators = {
	loadedContacts (contacts) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.CONTACTS_LOADED,
			contacts: contacts
		});
	},
	deletedContact (contact) {
		
	}
};

module.exports = ServerActionCreators;