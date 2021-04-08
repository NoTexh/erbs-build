class Axe {
    constructor(id, name, rarity, stats, mats, icon) {
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.stats = stats;
        this.mats = mats;
        this.icon = icon;
    }
}

const axes = [
    new Axe(1, "Chain Scythe", "Uncommon", ["Attack Power +50", "Attack Range +0.2"], ["", ""], "chain_scythe.png"),
    new Axe(2, "Battle Axe", "Uncommon", ["Attack Power +47"], ["", ""], "battle_axe.png"),
    new Axe(3, "Light Hatchet", "Rare", ["Attack Power +61", "Movement Speed +0.05"], ["Battle Axe", "Feather"], "light_hatchet.png"),
    new Axe(4, "Reaper's Scythe", "Rare", ["Attack Power +80", "Attack Range +0.5"], ["Battle Axe", "Feather"], "reapers_scythe.png"),
    new Axe(5, "Gigantic Axe", "Rare", ["Attack Power +110", "Movement Speed -0.1"], ["Battle Axe", "Steel"], "gigantic_axe.png"),
    new Axe(6, "Beam Axe", "Epic", ["Attack Power +127", "Vision Range +3.5"], ["Gigantic Axe", "Laser Pointer"], "beam_axe.png"),
    new Axe(7, "Santa Muerte", "Epic", ["Attack Power +100", "Max HP +365", "Life Steal +15%", "Attack Range +0.5"], ["Reaper's Scythe", "Ruby"], "santa_muerte.png"),
    new Axe(8, "Scythe", "Epic", ["Attack Power +112", "Attack Range +1", "Spell Amplification +20%"], ["Reaper's Scythe", "Gold"], "scythe.png"),
    new Axe(9, "Parashu", "Epic", ["Attack Power +115", "Cooldown Reduction +10%", "Movement Speed +0.07"], ["Reaper's Scythe", "Buddha Sarira"], "parashu.png"),
    new Axe(10, "Harpe", "Epic", ["Attack Power +105", "Movement Speed +0.07", "Attack Range +0.5", "Extra Skill Damage +33", "Healing Reduction (Skills) +1"], ["Reaper's Scythe", "White Crane Fan"], "harpe.png")
]

export default axes;