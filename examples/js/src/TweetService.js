TweetService = CUORE.Class(CUORE.JService, {

    init: function() {
        TweetService.parent.init.call(this);
        this.name = 'TWEET';
    },

    searchTweets: function(params) {
        var eventname = this.getEventNameForExecution('searchTweets');
        
        
        
        var p = {q: params.searchPhrase};
        var url = 'http://search.twitter.com/search.json?callback=';
        this.request(url, p, eventname);
    },
    
});