module.exports = ClozeCard;

var ClozeCard = function(answer, cloze){
  this.fullText = answer + " " + cloze;
  this.cloze = cloze;
  this.answer = answer;
  this.partial = function(){
    var fullText = cloze;
    var dots = "...";
    var a = answer.length;
    var b = answer.length + cloze.length;
    var part = fullText.substring(a, b);
    console.log(dots + part);
  };
};

var firstPresident = new ClozeCard("George Washington", "George Washington was the first president of the United States.");
console.log(firstPresident.fullText);
console.log(firstPresident.answer);
firstPresident.partial();
