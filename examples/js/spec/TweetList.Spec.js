describe("TweetList", function() {

    var aList;

    beforeEach(function() {
        aList = new TweetList();
    });

    it("extends Component", function() {
        expect(aList instanceof TweetList).toBeTruthy();
    });

    it("handles a TWEET_search_EXECUTED", function() {
        expect(aList.getManagedEvents()).toContain('TWEET_searchTweets_EXECUTED');
    });

    it("retrieves list of tweets", function() {
        var theMessage = new CUORE.Message();
        var response = {};
        var anItem = {
            'from_user': 'aUser',
            'profile_image_url': 'aPhoto',
            'text': 'someContent'
        };
        response.results = [anItem, anItem, anItem];
        theMessage.putMapOnAnswer(response);

        aList.eventDispatch('TWEET_searchTweets_EXECUTED', theMessage);

        expect(aList.size()).toEqual(response.results.length);
    });
    
    
    it("retrieves list of tweets", function() {
        var theMessage = new CUORE.Message();
        var response = {};
        var anItem = {
            'from_user': 'aUser',
            'profile_image_url': 'aPhoto',
            'text': 'someContent'
        };
        response.results = [anItem, anItem, anItem, anItem, anItem];
        theMessage.putMapOnAnswer(response);

        aList.eventDispatch('TWEET_searchTweets_EXECUTED', theMessage);

        expect(aList.item(3).user).toEqual('aUser');
        expect(aList.item(2).photo).toEqual('aPhoto');
        expect(aList.item(1).content).toEqual('someContent');
    });
    
    it("updates the renderer when filling the list", function() {
       spyOn(aList, 'updateRender');
       
       aList.fillList([]);
       
       expect(aList.updateRender).toHaveBeenCalled();
    });
    

    it("has a method for accesing items in the list", function() {
        var anItem = {
            'user': 'aUser',
            'photo': 'aPhoto',
            'content': 'someContent'
        };
        var anotherItem = {
            'user': 'anotherUser',
            'photo': 'anotherPhoto',
            'content': 'someContent'
        };
        
        var list = [anItem, anItem, anotherItem];
        aList.fillList(list);

        expect(aList.item(2).user).toEqual('anotherUser');
    });
    
    it('has its own renderer', function() {
        expect(aList.renderer instanceof ListRenderer).toBeTruthy();
    });

});