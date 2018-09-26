require('./pages/googleHomePage.js');

describe('Sample Google Page', () => {
    
    var googleHomePage;

    beforeEach(() => {
        googleHomePage = require('./pages/googleHomePage.js');
        googleHomePage.navigate();
    });
    
    it('should show default page title for home page', () => {

        expect(googleHomePage.getTitle()).toEqual('Google');
    });

    it('should show search keyword in page title for search results page when searching from home page', () => {
        
        var query = 'Shalvin';

        var googleSearchResultsPage = googleHomePage.search(query);

        expect(googleSearchResultsPage.getTitle()).toEqual(query + ' - Google Search');
    });

    it('should show search keyword in page title for search results page when searching from search results page', () => {
        
        var query1 = 'Shalvin';
        var query2 = 'Shalvin Abraham';

        var googleSearchResultsPage = googleHomePage.search(query1);
        
        googleSearchResultsPage.search(query2);

        expect(googleSearchResultsPage.getTitle()).toEqual(query2 + ' - Google Search');
    });
});