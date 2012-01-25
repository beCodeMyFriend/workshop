SearchHandler = CUORE.Class(CUORE.Handler, {

    handle: function (message) {
        var searchPhrase=this.owner.getValue();
        var service = document.page.getService('TWEET');
        
        service.execute('searchTweets',{'searchPhrase': searchPhrase},true);
    }
});
