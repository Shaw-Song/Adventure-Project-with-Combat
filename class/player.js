const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    // Fill this in
    const item = this.currentRoom.getItemByName(itemName);
    this.items.push(item);
    const index = this.currentRoom.items.indexOf(item);
    this.currentRoom.items.splice(index, 1);

  }

  dropItem(itemName) {

    // Fill this in
    const item = this.getItemByName(itemName);
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.currentRoom.items.push(item);

  }

  eatItem(itemName) {

    // Fill this in
    const item = this.getItemByName(itemName);
    if (item instanceof Food) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }


  }

  getItemByName(name) {

    // Fill this in
    for (let item of this.items) {
      if (item.name === name) {
          return item;
      }
    }

  }

  hit(name) {

    // Fill this in
    const enemy = this.currentRoom.getEnemyByName(name);
    if (enemy) {
      enemy.attackTarget = this;
      enemy.health -= this.strength; 
    }
    

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
