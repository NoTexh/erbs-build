let items = require("../models/items").items;

class Location {
    constructor(name, items) {
        this.name = name;
        this.items = items;
    }
}

const dock = new Location("Dock", [
    { itemName: items[3], amount: 6 },
    { itemName: items[13], amount: 3 },
    { itemName: items[19], amount: 4 },
    { itemName: items[20], amount: 7 },
    { itemName: items[29], amount: 7 },
    { itemName: items[32], amount: 7 },
    { itemName: items[42], amount: 7 },
    { itemName: items[46], amount: 6 },
    { itemName: items[47], amount: 3 },
    { itemName: items[50], amount: 7 },
    { itemName: items[52], amount: 7 },
    { itemName: items[53], amount: 8 },
    { itemName: items[54], amount: 9 },
    { itemName: items[55], amount: 9 },
    { itemName: items[58], amount: 8 },
    { itemName: items[71], amount: 1 },
    { itemName: items[73], amount: 6 },
    { itemName: items[80], amount: 5 },
]);

const avenue = new Location("Avenue", [
    { itemName: items[3], amount: 6 },
    { itemName: items[13], amount: 3 },
    { itemName: items[19], amount: 4 },
    { itemName: items[20], amount: 7 },
    { itemName: items[29], amount: 7 },
    { itemName: items[32], amount: 7 },
    { itemName: items[42], amount: 7 },
    { itemName: items[46], amount: 6 },
    { itemName: items[47], amount: 3 },
    { itemName: items[50], amount: 7 },
    { itemName: items[52], amount: 7 },
    { itemName: items[53], amount: 8 },
    { itemName: items[54], amount: 9 },
    { itemName: items[55], amount: 9 },
    { itemName: items[58], amount: 8 },
    { itemName: items[71], amount: 1 },
    { itemName: items[73], amount: 6 },
    { itemName: items[80], amount: 5 },
]);

export { dock, avenue};
export default Location;