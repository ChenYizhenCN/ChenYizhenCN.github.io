/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      
      
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'globe_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();
         
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("continents");
   //Edge symbol end:'continents'

   //=========================================================
   
   //Edge symbol: 'globe'
   (function(symbolName) {   
   
      

   })("globe");
   //Edge symbol end:'globe'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

   //=========================================================
   
   //Edge symbol: 'Sphera'
   (function(symbolName) {   
   
   })("Sphera");
   //Edge symbol end:'Sphera'

   //=========================================================
   
   //Edge symbol: 'Reflections'
   (function(symbolName) {   
   
   })("Reflections");
   //Edge symbol end:'Reflections'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-10260560");