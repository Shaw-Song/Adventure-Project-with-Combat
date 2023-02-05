const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
    this.act();
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in
    if (this.cooldown > 0) {
      this.rest();
    } else {
      const exitsDir = this.currentRoom.getExits();
      const exitNum = exitsDir.length;
      const randomNum = Math.floor(Math.random() * exitNum);
      const dir = exitsDir[randomNum];
      const room = this.currentRoom.getRoomInDirection(dir);
      this.currentRoom = room;
      this.cooldown = 3000;
      
    }

    
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };


    // setTimeout(resetCooldown, this.cooldown);//original code
    // const coolT = this.cooldown;
    const reset = resetCooldown.bind(this);// is this the point? "Take a look at the `Enemy.rest()` setTimeout loop. There is a bug..."
    setTimeout(reset, this.cooldown);
  }

  attack() {
    // Fill this in
    if (this.cooldown > 0) {
      this.rest();
    } else {
      if (this.attackTarget) {
        this.attackTarget.health -= this.strength;
        this.cooldown = 3000;
      }
    }
  }

  applyDamage(amount) {
    // Fill this in
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 3000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
