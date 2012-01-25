ListRenderer = CUORE.Class(CUORE.Renderer, {

    init: function() {
        ListRenderer.parent.init.call(this);
        this.setTagName('ul');
    },
    
    paint: function(component) {
        ListRenderer.parent.paint.call(this, component);
        this.updateWhenDrawn(component);
    },

    updateWhenDrawn: function(component) {
        this.panel.innerHTML = "";
        for (var i = 0, len = component.size(); i < len; i++) {
            this._addItem(component.item(i), i);
        }
    },
    
    _addItem: function(tweet) {
        var item = CUORE.Dom.createElement('li', null, this.panel);
        var title = CUORE.Dom.createElement('h4', {}, item);
        title.innerHTML= tweet.user;
        var img = CUORE.Dom.createElement('img', {}, item);
        img.src=tweet.photo;
        var content = CUORE.Dom.createElement('p', {}, item);
        content.innerHTML=tweet.content;
    },


});