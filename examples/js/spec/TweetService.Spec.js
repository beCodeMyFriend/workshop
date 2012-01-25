describe("TweetService", function() {

    it("inheris Service", function() {
        var aService = new TweetService();
        expect(aService instanceof CUORE.JService).toBeTruthy();
    });

    it("has the name TWEET", function() {
        var aService = new TweetService();
        expect(aService.getName()).toEqual('TWEET');
    });


    it("has a searchTweets procedure", function() {
        var aService = new TweetService();
        spyOn(aService, 'searchTweets').andCallThrough();
        spyOn(aService, 'request');

        aService.execute('searchTweets', {
            'searchPhrase': 'search'
        }, undefined);
        
        var url = 'http://search.twitter.com/search.json?q=search';
        var eventName = 'TWEET_searchTweets_EXECUTED';
        
        expect(aService.searchTweets).toHaveBeenCalled();
        expect(aService.request).toHaveBeenCalledWith('http://search.twitter.com/search.json?callback=', { q : 'search' }, eventName);
    });
});