/* SantaModel assists santa's helpers in packing children's requests.
 * It provides quality control by checking if the requests are being
 * fulfilled
 */

var SantaModel = {
  
    
    
  /* Initializes the model with a list of requests, 
   * and sets the first one as the current one 
   */
   init : function(list){
       
       this.currentQuestion = 0;
       this.questions = requests;
   },
  
   /* It moves "current" to the next request */
   next : function (){
       
       this.currentQuestion++;
   },
  
   /* Returns the current request. 
    * If all requests have been processed (there is no current one), it returns null 
    */
   getCurrentRequest : function () {
       
       if (this.currentQuestion < this.questions.length) {
           
           return this.questions[this.currentQuestion];
       } else {
           
           return null;
       }
   },  
    
   /* Packs the given item if it fulfills the current request.       
    * returns 1 if the given item fulfills the request (= answer)
    * returns 0 if the given item does not fulfill the request
    */
   pack : function(item) {
       
       if (this.getCurrentRequest ().answer == (item)) {
           
           return 1;
       } else {
           
           return 0;
       }
   }      
  
};

var SantaOctopus = {
    
    points : 0,
    
    init : function () {
        
        SantaModel.init ();
        SantaView.init ();
        
        this.points = 0;
    },
};

var SantaView = {
    
    init : function () {
        
        this.questionElement = $('.question');
        this.answersElement = $('.question-items');
        this.resultElement = $('.results');
        
        this.answersElement.on ('click', 'li', function (element) {
            
        });
        
        this.resultElement.hide ();
    },
    
    showQuestion : function (question) {
        
        this.question.text = question.question;
        
        
    },
};

$(document).ready (function () {
    
    SantaOctopus.init ();
});