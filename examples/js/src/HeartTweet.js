HeartTweet = CUORE.Class(CUORE.Page, {

    initializeComponents: function(){
        this._searchZone();
        var aList=new TweetList();
        this.addComponent(aList,'list',CUORE.Behaviours.REPLACE); 
    },
    
    initializeServices: function(){
        this.addService(new TweetService());  
    },
    
    _searchZone:function  (){
        var anInput=new CUORE.Components.Input('label.input');
        anInput.addHandler('BUTTON_search_CLICKED',new SearchHandler());
        this.addComponent(anInput,'searchBox',CUORE.Behaviours.HIJACK);
        
        var aButton=new CUORE.Components.Button('search','label.button');
        this.addComponent(aButton,'searchButton',CUORE.Behaviours.HIJACK);
        
        
    }
});