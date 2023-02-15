

const chai = require('chai');
const expect = chai.expect;



const { Light } = require('../class/light');
const { Item } = require('../class/item');


describe ('Light', function () {


    it('should have name and description attributes', function () {
      let light = new Light("light", "a light");
  
      expect(light.name).to.equal("light");
      expect(light.description).to.equal("a light");
  
    });
  
  
    it('should be an instance of Item and Light', function () {
      let light = new Light("light", "a light");
      let item = new Item("rock", "just a simple rock");
  
      expect(light instanceof Item).to.be.true;
      expect(light instanceof Light).to.be.true;
  
      expect(item instanceof Item).to.be.true;
      expect(item instanceof Light).to.be.false;
    });
});