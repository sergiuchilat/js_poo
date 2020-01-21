class Player {
 
  constructor (playerType) {
    this.name = playerType;
  }
  
  start(){
    console.log("POO: " + this.name + " start");
  }
  
  move(){
    console.log("POO: " + this.name + " move");
  }
  
  stop(){
    console.log(`POO: ${this.name} stop`);
  }
}

class Mario extends Player{
  jump(){
    console.log(`POO: ${this.name} jump`);
  }
}


class Luigi extends Player{
  run(){
    console.log(`POO: ${this.name} run`);
  }
}

startGame();

function startGame () {
  const marioPlayer = new Mario("Mario");
  marioPlayer.start();
  marioPlayer.move();
  marioPlayer.jump();
  marioPlayer.move();
  marioPlayer.stop();
  
  const luigiPlayer = new Luigi("Luigi");
  luigiPlayer.start();
  luigiPlayer.move();
  luigiPlayer.run();
  luigiPlayer.move();
  luigiPlayer.stop();
}
