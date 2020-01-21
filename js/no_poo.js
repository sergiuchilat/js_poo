startGame();

function startGame () {
  marioStart();
  marioMove();
  marioMove();
  marioStop();
  
  luigiStart();
  luigiMove();
  luigiMove();
  luigiStop();
}

function marioStart(){
  console.log("Mario start");
}

function marioMove(){
  console.log("Mario move");
}

function marioStop(){
  console.log("Mario stop");
}

function luigiStart(){
  console.log("Luigi start");
}

function luigiMove(){
  console.log("Luigi move");
}

function luigiStop(){
  console.log("Luigi stop");
}
