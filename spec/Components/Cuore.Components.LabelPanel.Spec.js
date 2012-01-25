describe("Label Panel", function() {
    
    var xhr;

    beforeEach(function(){
        xhr = sinon.useFakeXMLHttpRequest();
        var requests = [];
        
        xhr.onCreate = function (xhr) {
            requests.push(xhr);
        };
      
        CUORE.Core.createXHR = function(){
            return xhr;
        };
    });

    afterEach(function(){
        var container = document.getElementById('xhtmlToTest');
        container.innerHTML = '';

        xhr.restore();
    });
    
    it("inherits Component", function() {
        var thePanel = new CUORE.Components.LabelPanel();

        expect(thePanel instanceof CUORE.Component).toBeTruthy();
        expect(thePanel instanceof CUORE.Components.LabelPanel).toBeTruthy();
    });

    it("could be initialized with I18NKey", function() {
        var aI18NKey = "CanonicalKey";
        var thePanel = new CUORE.Components.LabelPanel(aI18NKey);
        expect(thePanel.getI18NKey()).toEqual(aI18NKey);
    });

    it("adds the class labelPanel when drawn", function() {

        var container = createTestContainer();
        var thePanel = new CUORE.Components.LabelPanel("CanonicalKey");

        thePanel.setContainer(container.id);
        var id = thePanel.getUniqueID();

        thePanel.draw();

        var panelDOM = document.getElementById(id);
        expect(CUORE.Dom.hasClass(panelDOM, "innerComponentDiv")).toBeTruthy();
        expect(CUORE.Dom.hasClass(panelDOM, "labelPanel")).toBeTruthy();
    });

    var createTestContainer = function() {
        var container = document.createElement('div');
        container.id = "testingContainer";
        var panel = document.getElementById("xhtmlToTest");
        panel.appendChild(container);
       
        return container;
    };
});