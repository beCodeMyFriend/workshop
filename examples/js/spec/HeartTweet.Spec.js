describe("Page", function() {
    var aPage, registry, directory;

    beforeEach(function() {
      
    });

    it("extend page", function() {
        var aHeart=new HeartTweet("http://www.anydomain.com");
        expect(aHeart instanceof HeartTweet).toBeTruthy();
    });
    
    it("has a TWEET service", function() {
        var aHeart=new HeartTweet("http://www.anydomain.com");
        expect(aHeart.getService('TWEET') instanceof TweetService).toBeTruthy();
    });
    
    it("has an Input at #searchbox", function() {
        var aHeart=new HeartTweet("http://www.anydomain.com");
        spyOn(aHeart, 'addComponent');

        aHeart.initializeComponents();
        var arguments = aHeart.addComponent.argsForCall[0];

        expect(aHeart.addComponent).toHaveBeenCalled();
        expect(arguments[0] instanceof CUORE.Components.Input).toBeTruthy();
        expect(arguments[1]).toEqual('searchBox');
    });

    
});