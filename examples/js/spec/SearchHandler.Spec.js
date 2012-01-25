describe("SearchHandler", function() {

    it("inheris Handler", function() {
        var aHandler = new SearchHandler();
        expect(aHandler instanceof CUORE.Handler).toBeTruthy();
    });
    
    it("call service with owner value", function() {
        var aService={};
        aService.execute=jasmine.createSpy();

        document.page = {};        
        document.page.getService = jasmine.createSpy().andReturn(aService);
        
        var aComponent={};
        aComponent.getValue=jasmine.createSpy().andReturn('aValue');
        
        var aHandler = new SearchHandler();
        aHandler.setOwner(aComponent);
        aHandler.handle();
        
        expect(aService.execute).toHaveBeenCalledWith('searchTweets',{'searchPhrase': 'aValue'},true);
    });

});