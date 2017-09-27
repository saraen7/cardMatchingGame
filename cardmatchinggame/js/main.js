//clicking on "start game" shuffles the cards - DONE 9/20
//clicking on "reset game" flips the cards to show the back of each card
//clicking on a card shows its face - DONE 9/20
//clicking on a second card that matches the first card, keeps both cards face-up - DONE 9/20
//clicking on a second card that does not match the face of the first card, flips both cards face down
//clicking on a matching set, followed by a third card alerts the user
//that alert contains the number of tries that the user attempted
//last step - add a cheat mode that after one card is face up, on mouse over, expands the size of the matching face-down card

$("document").ready(function(){ //loads the javascript after the HTML is mostly finished loading
  $("button:first-of-type").on("click",function(){

    var cards = ["king","king","queen","queen"];

    //this function shuffles the array - https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    function shuffle(a) {
      for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
    }

    shuffle(cards); //this calls the shuffle function
    $(".card1").addClass(cards[0]); //appends either king or queen class to the first card
    $(".card2").addClass(cards[1]); //appends either king or queen class to the second card
    $(".card3").addClass(cards[2]); //appends either king or queen class to the third card
    $(".card4").addClass(cards[3]); //appends either king or queen class to the fourth card

    if($(".faceUp").length==2 && $(".king").length==1){
      alert("two cards selected, one card is a king");
    }

    $("img").on("click",function(){
      if($(".faceUp").length < 2){ //if less than 2 cards are face up, turn this card face up
        $(this).addClass("faceUp"); //adds class "faceUp"
        if($(this).hasClass("king")){
          $(this).attr("src","images/King.png");//change the src tag to King if the class is King
        } else {
          $(this).attr("src","images/Queen.png");//change the src tag to Queen if the class is Queen
        }
        $(this).on("change",function(){
          if ($(".faceUp.king").length == 1 && $(".faceUp.queen").length == 1) { //if one king and one queen are face up
            alert("Those two don't match. Try again."); // alert the user that the two cards don't match
            $("img").removeClass("faceUp"); //remove the class of FaceUp from both cards
            $("img").attr("src","images/back-of-card.png"); //display the backs of the cards
          }
        });
      } else if ($(".faceUp.king").length == 2 || $(".faceUp.queen").length == 2) { //if two Kings are face up or two Queens are face up, turn the third card face up on click
        $(this).addClass("faceUp"); //adds class "faceUp"
        if($(this).hasClass("king")){
          $(this).attr("src","images/King.png");//change the src tag to King if the class is King
        } else {
          $(this).attr("src","images/Queen.png");//change the src tag to Queen if the class is Queen
        }
        alert("You win! You took _ turns."); //I don't know why this alert fires before the src changes in the image.
    /*  } else if ($(".faceUp.king").length == 1 && $(".faceUp.queen").length == 1) {

    }  */

      } else {
        alert("face up length is greater than 2")
      }
    });

  }); //end Start of Game
}); //end loading javascript for safety
