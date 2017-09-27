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
    var score = 0; //tracks number of clicks to score the user

    //this function shuffles the array - https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    function shuffle(a) {
      for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
    }

    function applyShuffle() {
      shuffle(cards); //this calls the shuffle function
      $(".card1").addClass(cards[0]); //appends either king or queen class to the first card
      $(".card2").addClass(cards[1]); //appends either king or queen class to the second card
      $(".card3").addClass(cards[2]); //appends either king or queen class to the third card
      $(".card4").addClass(cards[3]); //appends either king or queen class to the fourth card
    }

    applyShuffle(); //shuffles cards and applies king or queen class to each

    $("p").text(""); //Removed instructions on clicking start button

    //if($(".faceUp").length < 4) { //if faceUp is less than 4 allow, clicking on cards - this prevents the count from going up after the player has won - doesn't currently work - not sure why
    $("img").on("click",function(){
      score++; //adds one to score every time a card is clicked
      if($(".faceUp").length < 2){ //if less than 2 cards are face up, turn this card face up
        $(this).addClass("faceUp"); //adds class "faceUp"
        if($(this).hasClass("king")){
          $(this).attr("src","images/King.png");//change the src tag to King if the class is King
        } else {
          $(this).attr("src","images/Queen.png");//change the src tag to Queen if the class is Queen
        }
        if($(".faceUp.king").length == 2 || $(".faceUp.queen").length == 2) {
          $("p").text("Those two match! Yay!"); // updates the text if two cards match
        }
        if($(".faceUp.king").length == 1 && $(".faceUp.queen").length == 1) { //if two face up cards don't match
          $("p").text("Oops. Those two don't match."); //tell the user that two cards don't match
          $(this).fadeOut("slow").attr("src","images/back-of-card.png").fadeIn("slow").removeClass("faceUp");
        }

      } else if ($(".faceUp.king").length == 2 || $(".faceUp.queen").length == 2) { //if two Kings are face up or two Queens are face up, turn the third card and fourth card face up on click
        $(this).addClass("faceUp"); //adds class "faceUp"
        if($(this).hasClass("king")){
          $(this).attr("src","images/King.png");//change the src tag to King if the class is King
        } else {
          $(this).attr("src","images/Queen.png");//change the src tag to Queen if the class is Queen
        }
        $("p").text("You win! You took " + score + " turns.");
        $(".king").attr("src","images/King.png"); //turn any face down Kings face up
        $(".queen").attr("src","images/Queen.png"); //turn any face down Queens face up
        $("img").addClass("faceUp"); //add class Face Up to all images to add it to the remaining face down images

      } else {
        $("p").text("Click on \"Reset game\" to start over.");
      }
    }); //end clicking on the cards
  //} // end if faceUp is less than 4 - not currently working
    $("button:last-of-type").on("click",function(){ //clicking the reset button removes classes, shows back of card, reshuffles
      $("p").text("");
      score = 0;
      $("img").attr("src","images/back-of-card.png").removeClass("faceUp").removeClass("king").removeClass("queen");
      applyShuffle(); //reshuffles cards
    });

  }); //end Start of Game
}); //end loading javascript for safety
