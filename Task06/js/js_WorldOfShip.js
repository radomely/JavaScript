function Ship(name, life, armor, color, x, y, amunition) {
    this.speed = 0;
    this.name = name;
    this.life = life;
    this.armor = armor;
    this.color = color;
    this.x = x;
    this.y = y;
    this.amunition = amunition;
  }
  
  Ship.prototype.move = function (a, b) {
    if (this.speed > 0) {
      this.x = a;
      this.y = b;
    }
  }
  
  Ship.prototype.acselerate = function (speed) {
    this.speed = speed;
  }
  
  Ship.prototype.stop = function () {
    this.speed = 0;
  }
  
  Ship.prototype.fire = function () {
    if (this.amunition > 0) {
      this.amunition--;
    }
  }
  function ES (name, life, armor, color, x, y, amunition, torpeds, smokeAmunition) {
    // this = {}
    Ship.call(this, name, life, armor, color, x, y, amunition);
    this.torpeds = torpeds;
    this.smokeAmunition = smokeAmunition;
  }
  
  ES.prototype = Object.create(Ship.prototype);
  ES.prototype.constructor = ES;
  
  ES.prototype.launchTorpeds = function() {
    if(this.torpeds > 0) {
      this.torpeds--;
    }
  }
  
  ES.prototype.launchSmoke = function() {
    if(this.smokeAmunition > 0) {
      this.smokeAmunition--;
    }
  }
  
  
  let player1 = new ES('Bob', 5000, 500, 'red', 45, 12, 50, 30,5);

  function AV (name, life, armor, color, x, y, amunition, plane){
    // this = {}
    Ship.call(this, name, life, armor, color, x, y, amunition);
    this.plane = plane;
  }

  AV.prototype = Object.create(Ship.prototype);
  AV.prototype.constructor = ES;

  AV.prototype.launchPlane = function(){
      if(this.plane > 0){
        this.plane--;
      }
  }
  let player2 = new AV('Dillan', 5000, 500, 'green', 45, 12, 50, 8);
    console.log(player2);

  function CR (name, life, armor, color, x, y, amunition, PVO){
    // this = {}
    Ship.call(this, name, life, armor, color, x, y, amunition);
    this.PVO = PVO;
  }

  CR.prototype = Object.create(Ship.prototype);
  CR.prototype.constructor = ES;

  CR.prototype.launchPVO = function(){
      if(this.PVO > 0){
        this.PVO--;
      }
  }
  let player3 = new CR('Martin', 5000, 500, 'blue', 45, 12, 50, 8);
  console.log(player3);
//////////////////////////////////////////////Class
// class Ship {
//     constructor(name, life, armor, color, x, y, amunition) {
//       this.speed = 0;
//       this.name = name;
//       this.life = life;
//       this.armor = armor;
//       this.color = color;
//       this.x = x;
//       this.y = y;
//       this.amunition = amunition;
//     }
  
//     move(a, b) {
//       if (this.speed > 0) {
//         this.x = a;
//         this.y = b;
//       }
//     }
  
//     acselerate(speed) {
//       this.speed = speed;
//     }
  
//     stop() {
//       this.speed = 0;
//     }
  
//     fire() {
//       if (this.amunition > 0) {
//         this.amunition--;
//       }
//     }
//   }
// class ES extends Ship {
//     constructor(name, life, armor, color, x, y, amunition,torpeds,smokeAmunition) {
//     super(name, life, armor, color, x, y, amunition)
//     this.torpeds = torpeds;
//     this.smokeAmunition = smokeAmunition;
//     }
//     launchTorpeds(){
//       if(this.torpeds > 0) {
//         this.torpeds--;
//       }
//     }
//     launchSmoke() {
//       if(this.smokeAmunition > 0) {
//         this.smokeAmunition--;
//       }
//     }
//   }
  
//   let player1 = new ES('Bob', 5000, 500, 'red', 45, 12, 50, 30,5);
  
//   class AV extends Ship {
//     constructor(name, life, armor, color, x, y, amunition, plane) {
//     super(name, life, armor, color, x, y, amunition);
//     this.plane = plane;
//   }
//   launchPlane(){
//     if(this.plane > 0){
//     this.plane--;
//     }
//   }
// }
//   let player2 = new AV('Dillan', 5000, 500, 'green', 45, 12, 50, 8);
//     console.log(player2);

//     class CR extends Ship {
//         constructor(name, life, armor, color, x, y, amunition, PVO) {
//             super(name, life, armor, color, x, y, amunition);
//             this.PVO = PVO;
//         }
//         launchPVO(){
//             if(this.PVO > 0){
//               this.PVO--;
//             }
//         }
//     }
//   let player3 = new CR('Martin', 5000, 500, 'blue', 45, 12, 50, 8);
//   player3.launchPVO();
//   player3.launchPVO();
//   console.log(player3);

class Student {constructor(){}};
console.log(typeof Student);
