import Weapon from './Weapon';

const sniper_rifles = [
    new Weapon(1, "Springfield", "Uncommon", ["Attack Power +50", "Attack Range +0.2"], ["", ""], "sniper_rifle/springfield.png"),
    new Weapon(2, "Harpoon Gun", "Rare", ["Attack Power +47"], ["", ""], "sniper_rifle/harpoon_gun.png"),
    new Weapon(3, "Golden Rifle", "Rare", ["Attack Power +61", "Movement Speed +0.05"], ["Battle Axe", "Feather"], "sniper_rifle/golden_rifle.png"),
    new Weapon(4, "Railgun", "Rare", ["Attack Power +80", "Attack Range +0.5"], ["Battle Axe", "Feather"], "sniper_rifle/railgun.png"),
    new Weapon(5, "Tac-50", "Epic", ["Attack Power +110", "Movement Speed -0.1"], ["Battle Axe", "Steel"], "sniper_rifle/tac-50.png"),
    new Weapon(6, "Intervention", "Epic", ["Attack Power +127", "Vision Range +3.5"], ["Gigantic Axe", "Laser Pointer"], "sniper_rifle/intervention.png"),
    new Weapon(7, "NTW-20", "Epic", ["Attack Power +100", "Max HP +365", "Life Steal +15%", "Attack Range +0.5"], ["Reaper's Scythe", "Ruby"], "sniper_rifle/ntw-20.png"),
    new Weapon(8, "Polaris", "Epic", ["Attack Power +112", "Attack Range +1", "Spell Amplification +20%"], ["Reaper's Scythe", "Gold"], "sniper_rifle/polaris.png"),
    new Weapon(9, "The Deadly Ray", "Legendary", ["Attack Power +115", "Cooldown Reduction +10%", "Movement Speed +0.07"], ["Reaper's Scythe", "Buddha Sarira"], "sniper_rifle/the_deadly_ray.png"),
]

export default sniper_rifles;