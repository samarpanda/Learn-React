var keyMirror = require('react/lib/keyMirror');

module.exports = {
	API: '',

	ActionTypes: keyMirror({
		CONTACTS_LOADED: null,
		LOAD_CONTACTS: null
	}),

	PayloadSources: keyMirror({
		SERVER_ACTION: null,
		VIEW_ACTION: null
	})
};