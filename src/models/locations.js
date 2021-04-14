let items = require("../models/items").items;

class Location {
    constructor(name, items) {
        this.name = name;
        this.items = items;
    }
}

const dock = new Location("Dock", [
    { item: items[3], amount: 6 },
    { item: items[13], amount: 3 },
    { item: items[19], amount: 4 },
    { item: items[20], amount: 7 },
    { item: items[29], amount: 7 },
    { item: items[32], amount: 7 },
    { item: items[42], amount: 7 },
    { item: items[46], amount: 6 },
    { item: items[47], amount: 3 },
    { item: items[50], amount: 7 },
    { item: items[52], amount: 7 },
    { item: items[53], amount: 8 },
    { item: items[54], amount: 9 },
    { item: items[55], amount: 9 },
    { item: items[58], amount: 8 },
    { item: items[71], amount: 1 },
    { item: items[73], amount: 6 },
    { item: items[80], amount: 5 },
]);

const avenue = new Location("Avenue", [
    { item: items[3], amount: 6 },
    { item: items[13], amount: 3 },
    { item: items[19], amount: 4 },
    { item: items[20], amount: 7 },
    { item: items[29], amount: 7 },
    { item: items[32], amount: 7 },
    { item: items[42], amount: 7 },
    { item: items[46], amount: 6 },
    { item: items[47], amount: 3 },
    { item: items[50], amount: 7 },
    { item: items[52], amount: 7 },
    { item: items[53], amount: 8 },
    { item: items[54], amount: 9 },
    { item: items[55], amount: 9 },
    { item: items[58], amount: 8 },
    { item: items[71], amount: 1 },
    { item: items[73], amount: 6 },
    { item: items[80], amount: 5 },
]);

export { dock, avenue};
export default Location;