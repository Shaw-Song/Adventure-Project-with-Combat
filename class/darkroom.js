const { Room } = require('./room');


class DarkRoom extends Room {
    constructor(name, description) {
        super(name,description);
        this.hasLight = false;
    }
    printDarkRoom() {
        if (this.hasLight) {
            this.printRoom();
        } else {
            console.log('You cannot see anything');
        }
    }

}

module.exports = {
    DarkRoom
};