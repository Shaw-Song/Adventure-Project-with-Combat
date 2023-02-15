const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const { DarkRoom } = require('../class/darkroom');
const { Light } = require('../class/light');
const {  Player } = require('../class/player');
const { Room } = require('../class/room'); 


describe("DarkRoom", () => {
    let player;
    let darkroom;
    let light;
    let spy;

    beforeEach(function() {
        darkroom = new DarkRoom("Test Dark Room", "It is a dark room");
        light = new Light("light", "a light");
        player = new Player("player", darkroom);
        spy = chai.spy.on(darkroom, "printRoom");
        player.items.push(light);
    });

    it('should inherit from Room class', () => {
        expect(darkroom instanceof Room).to.be.true;
        expect(darkroom instanceof DarkRoom).to.be.true;
    });
    context('if there is no light in the room or being held', () => {
        it('should show only a description of `You cannot see anything`', () => {
            darkroom.printDarkRoom();
            expect(spy).to.not.have.been.called();
        });
    });
    context('if there is a light item in the room', () => {
        it('should print room details`', () => {
            darkroom.items.push(light);
            darkroom.hasLight = true;
            darkroom.printDarkRoom();
            expect(spy).to.have.been.called.once;
        });
    });
    context('if there is a light holded by player', () => {
        it('should print room details`', () => {
            player.items.push(light);
            darkroom.hasLight = true;
            darkroom.printDarkRoom();
            expect(spy).to.have.been.called.once;
        });
    });
    
});
