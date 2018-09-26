var googleSearchResultsPage = function() {
	
	this.search = (key) => {

        var queryElement = $('[name="q"][type="text"]');
        
        queryElement.clear();

		queryElement.sendKeys(key);
		
		$('[name="btnG"]').click();

		return this;
	};

	this.getTitle = () => {
		return browser.getTitle()
	};
};

module.exports = new googleSearchResultsPage();