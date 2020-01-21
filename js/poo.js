class Mario {
  start(){
    console.log("POO: Mario start");
  }
  
  move(){
    console.log("POO: Mario move");
  }
  
  stop(){
    console.log("POO: Mario stop");
  }
}


class Luigi {
  start(){
    console.log("POO: Luigi start");
  }
  
  move(){
    console.log("POO: Luigi move");
  }
  
  stop(){
    console.log("POO: Luigi stop");
  }
}

startGame();

function startGame () {
  const marioPlayer = new Mario();
  marioPlayer.start();
  marioPlayer.move();
  marioPlayer.move();
  marioPlayer.stop();
  
  const luigiPlayer = new Luigi();
  luigiPlayer.start();
  luigiPlayer.move();
  luigiPlayer.move();
  luigiPlayer.stop();
}

