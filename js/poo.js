class Player {
 
  constructor (playerType) {
    this._name = playerType;
  }
  
  getName(){
    return this._name;
  }
  
  start(){
    console.log("POO: " + this._name + " start");
  }
  
  move(){
    console.log("POO: " + this._name + " move");
  }
  
  stop(){
    console.log(`POO: ${this._name} stop`);
  }
}

class Mario extends Player{
  jump(){
    console.log(`POO: ${this.getName()} jump`);
  }
}


class Luigi extends Player{
  run(){
    console.log(`POO: ${this.getName()} run`);
  }
}

startGame();

function startGame () {
  const marioPlayer = new Mario("Mario");
  console.log('===Player name: ' + marioPlayer.getName());
  marioPlayer.start();
  marioPlayer.move();
  marioPlayer.jump();
  marioPlayer.move();
  marioPlayer.stop();
  
  const luigiPlayer = new Luigi("Luigi");
  console.log('===Player name: ' + luigiPlayer.getName());
  luigiPlayer.start();
  luigiPlayer.move();
  luigiPlayer.run();
  luigiPlayer.move();
  luigiPlayer.stop();
}
