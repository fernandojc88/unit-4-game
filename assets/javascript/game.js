var Random = Math.floor(Math.random()*101+19)
  $("#randomNumber").text(Random);

  var num1 = Math.floor(Math.random()*11+1)
  var num2 = Math.floor(Math.random()*11+1)
  var num3 = Math.floor(Math.random()*11+1)
  var num4 = Math.floor(Math.random()*11+1)

  var userTotal = 0;
  var Wins = 0;
  var Losses = 0;

  $("#numberWins").text(Wins);
  $("#numberLosses").text(Losses);

  function reset () {
    var Random = Math.floor(Math.random()*101+19)
  $("#randomNumber").text(Random);

  var num1 = Math.floor(Math.random()*11+1)
  var num2 = Math.floor(Math.random()*11+1)
  var num3 = Math.floor(Math.random()*11+1)
  var num4 = Math.floor(Math.random()*11+1)
  
  userTotal = 0;
    $("#finalTotal").text(userTotal);
  
  }
  function yay () {
    alert ("you won!");
    Wins++;
    $("#numberWins").text(Wins)
    reset();
  }
  function loser() {
    alert ("you lose!");
    losses++;
    $("#numberLosses").text(Losses)
    reset();
  }

    
    $("#one").on("click", function() {
      userTotal = userTotal + num1;
      $("#finalTotal").text(userTotal);
      if (userTotal == Random) {
        yay();
      }
      else if (userTotal > Random) {
        loser();
      }

    })
    $("#two").on("click", function() {
      userTotal = userTotal + num2;
      $("#finalTotal").text(userTotal);
      if (userTotal == Random) {
        yay();
      }
      else if (userTotal > Random) {
        loser();
      }

    })
    $("#three").on("click", function() {
      userTotal = userTotal + num3;
      $("#finalTotal").text(userTotal);
      if (userTotal == Random) {
        yay();
      }
      else if (userTotal > Random) {
        loser();
      }

    })
    $("#four").on("click", function() {
      userTotal = userTotal + num4;
      $("#finalTotal").text(userTotal);
      if (userTotal == Random) {
        yay();
      }
      else if (userTotal > Random) {
        loser();
      }

    })
  