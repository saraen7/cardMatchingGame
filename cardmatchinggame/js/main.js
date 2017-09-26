//clicking on "start game" shuffles the cards
//clicking on "reset game" flips the cards to show the back of each card
//clicking on a card shows its face
//clicking on a second card that matches the first card, keeps both cards face-up
//clicking on a second card that does not match the face of the first card, flips both cards face down
//clicking on a matching set, followed by a third card alerts the user
//that alert contains the number of tries that the user attempted
//last step - add a cheat mode that after one card is face up, on mouse over, expands the size of the matching face-down card

$("document").ready(function(){ //loads the javascript after the HTML is mostly finished loading

var cards = ["king","king","queen","queen"];

//this function shuffles the array - https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

$("button:first-of-type").on("click",function(){ //clicking on the "start game" button
  shuffle(cards); //this calls the shuffle function
  $(".card1").addClass(cards[0]); //appends either king or queen class to the first card
  $(".card2").addClass(cards[1]); //appends either king or queen class to the second card
  $(".card3").addClass(cards[2]); //appends either king or queen class to the third card
  $(".card4").addClass(cards[3]); //appends either king or queen class to the fourth card
});


$(".card1").on("click",function(){
  if($(".faceUp").length <= 1){ //if fewer than two cards are face up, turn card1 face up
    $(".card1").addClass("faceUp"); //adds class "faceUp"
    if($(".card1").hasClass("king")){
      $(".card1").attr("src","images/King.png");//change the src tag to King if the class is King
    } else {
      $(".card1").attr("src","images/Queen.png");//change the src tag to Queen if the class is Queen
  }
}
});

$(".card2").on("click",function(){
  $(".card2").addClass("faceUp"); //adds class "faceUp"
  if($(".card2").hasClass("king")){
  $(".card2").attr("src","images/King.png");//change the src tag to King if the class is King
} else {
  $(".card2").attr("src","images/Queen.png");//change the src tag to Queen if the class is Queen
}
});

$(".card3").on("click",function(){
  $(".card3").addClass("faceUp"); //adds class "faceUp"
  if($(".card3").hasClass("king")){
  $(".card3").attr("src","images/King.png");//change the src tag to King if the class is King
} else {
  $(".card3").attr("src","images/Queen.png");//change the src tag to Queen if the class is Queen
}
});

$(".card4").on("click",function(){
  $(".card4").addClass("faceUp"); //adds class "faceUp"
  if($(".card4").hasClass("king")){
  $(".card4").attr("src","images/King.png");//change the src tag to King if the class is King
} else {
  $(".card4").attr("src","images/Queen.png");//change the src tag to Queen if the class is Queen
}
});//end card4 onclick
//} //if 0 or 1 cards are faceUp

//}); //end img on click


}); //end loading javascript for safety
