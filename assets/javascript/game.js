$(document).ready(function() {

    var magicNbr = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var btnStart = "Click to Start";
    var btnBail = "Restart";
    var btnRedo = "Try Again";

  $("#magicBtn").click(function() {
    magicTime();
    $("#magic").text(magicNbr);
     
  }); // close out the start/restart button function

  $("#pic-1").click(function() {
          userTotal = userTotal + crystal1;
         $("#magicCount").text(userTotal);
           if (userTotal == magicNbr) {
              winner();
           } else if (userTotal > magicNbr) {
              loser();
           }
  }); // close out the pic-1 click function

  $("#pic-2").click(function() {
          userTotal = userTotal + crystal2;
         $("#magicCount").text(userTotal);
         if (userTotal == magicNbr) {
          winner();
         } else if (userTotal > magicNbr) {
          loser();
         }
  }); // close out the pic-2 click function

  $("#pic-3").click(function() {
          userTotal = userTotal + crystal3;
         $("#magicCount").text(userTotal);
         if (userTotal == magicNbr) {
          winner();
         } else if (userTotal > magicNbr) {
          loser();
         }
  }); // close out the pic-3 click function

  $("#pic-4").click(function() {
          userTotal = userTotal + crystal4;
         $("#magicCount").text(userTotal);
         if (userTotal == magicNbr) {
          winner();
         } else if (userTotal > magicNbr) {
          loser();
         }
  }); // close out the pic-4 click function


  // function to create the magic number and assign the crystals their numbers
  function magicTime() {
    crystal1 = Math.floor(Math.random() * 10);
    crystal2 = Math.floor(Math.random() * 8);
    crystal3 = Math.floor(Math.random() * 9);
    crystal4 = Math.floor(Math.random() * 5);
    magicNbr = Math.floor(Math.random() * 70); 
    userTotal = 0;
    $("#headTag").text("");
    $("#magic").text(magicNbr);
    $("#magicCount").text(userTotal);
  }

  function winner() {
    wins++;
    $("#headTag").text("You Win!");
    $("#winCount").text(wins);
    magicTime();
  }
  
  function loser() {
    losses++;
    $("#headTag").text("You Lose! Try Again!");
    $("#lossCount").text(losses);
    magicTime();
  }
  console.log(magicNbr);
  
  console.log("crystal1", crystal1);
  //console.log(crystal2);
  //console.log(crystal3);
  //console.log(crystal4);

}); // document.ready close out
