import Weapon from './Weapon';

const axes = [
    new Weapon(1, "Chain Scythe", "Uncommon", ["Attack Power +50", "Attack Range +0.2"], ["", ""], "axes/chain_scythe.png"),
    new Weapon(2, "Battle Axe", "Uncommon", ["Attack Power +47"], ["", ""], "axes/battle_axe.png"),
    new Weapon(3, "Light Hatchet", "Rare", ["Attack Power +61", "Movement Speed +0.05"], ["Battle Axe", "Feather"], "axes/light_hatchet.png"),
    new Weapon(4, "Reaper's Scythe", "Rare", ["Attack Power +80", "Attack Range +0.5"], ["Battle Axe", "Feather"], "axes/reapers_scythe.png"),
    new Weapon(5, "Gigantic Axe", "Rare", ["Attack Power +110", "Movement Speed -0.1"], ["Battle Axe", "Steel"], "axes/gigantic_axe.png"),
    new Weapon(6, "Beam Axe", "Epic", ["Attack Power +127", "Vision Range +3.5"], ["Gigantic Axe", "Laser Pointer"], "axes/beam_axe.png"),
    new Weapon(7, "Santa Muerte", "Epic", ["Attack Power +100", "Max HP +365", "Life Steal +15%", "Attack Range +0.5"], ["Reaper's Scythe", "Ruby"], "axes/santa_muerte.png"),
    new Weapon(8, "Scythe", "Epic", ["Attack Power +112", "Attack Range +1", "Spell Amplification +20%"], ["Reaper's Scythe", "Gold"], "axes/scythe.png"),
    new Weapon(9, "Parashu", "Epic", ["Attack Power +115", "Cooldown Reduction +10%", "Movement Speed +0.07"], ["Reaper's Scythe", "Buddha Sarira"], "axes/parashu.png"),
    new Weapon(10, "Harpe", "Epic", ["Attack Power +105", "Movement Speed +0.07", "Attack Range +0.5", "Extra Skill Damage +33", "Healing Reduction (Skills) +1"], ["Reaper's Scythe", "White Crane Fan"], "axes/harpe.png")
]

export default axes;