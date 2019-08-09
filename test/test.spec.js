const {assert} = require('chai');
require('mocha');
const fs = require('fs');
const json = require('../data/page1.json');
describe('Apps', () => {

	it('should have proper total json structure', () => {
		try {
			JSON.parse(JSON.stringify(json))
			return true;
		} catch(e){
			assert(false, e);
		}
	});
});