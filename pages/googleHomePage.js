require('./googleSearchResultsPage');

var googleHomePage = function() {
	
	this.navigate = () => {
		disableAngularCheck();
		browser.get('https://www.google.com/');
	};

	this.search = (key) => {

		element(by.name('q')).sendKeys(key);
		
		element(by.name('btnK')).click();

		return require('./googleSearchResultsPage.js');
	};

	this.getTitle = () => {
		
		return browser.getTitle()
	};
};

module.exports = new googleHomePage();

function disableAngularCheck() {
	browser.waitForAngularEnabled(false);
	browser.ignoreSynchronization = true;
}
