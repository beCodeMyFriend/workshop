TweetList = CUORE.Class(CUORE.Component, {

    init: function() {
        TweetList.parent.init.call(this);
        this.setRenderer(new ListRenderer());
        this.list = [];

        this.addHandler('TWEET_searchTweets_EXECUTED', new TweetsHandler());
    },

    fillList: function(tweets) {
        this.list = tweets;
        this.updateRender();
    },

    size: function() {
        return this.list.length;
    },

    item: function(index) {
        return this.list[index];
    }
});

TweetsHandler = CUORE.Class(CUORE.Handler, {

    handle: function(message) {
        var tweets = message.getFromAnswer('results');
        var items = this._createItems(tweets);

        this.owner.fillList(items);
    },

    _createItems: function(tweets) {
        var items = []

        for (var i = 0; i < tweets.length; i++) {
            var tweet = tweets[i];

            items.push({
                'user': tweet.from_user,
                'photo': tweet.profile_image_url,
                'content': tweet.text
            });
        }

        return items
    }
});