class WeaponType {
    constructor(displayName, pathName, imageName) {
        this.displayName = displayName;
        this.pathName = pathName;
        this.imageName = imageName;
    }
}

const weaponTypes = [
    new WeaponType("Axe", "axe", "axe.png"),
    new WeaponType("Assault Rifle", "assault_rifle", "assault_rifle.png"),
    new WeaponType("Bat", "bat", "bat.png"),
    new WeaponType("Bow", "bow", "bow.png"),
    new WeaponType("Crossbow", "batcrossbow", "crossbow.png"),
    new WeaponType("Dual Swords", "dual_swords", "dual_swords.png"),
    new WeaponType("Glove", "glove", "glove.png"),
    new WeaponType("Guitar", "guitar", "guitar.png"),
    new WeaponType("Hammer", "hammer", "hammer.png"),
    new WeaponType("Pistol", "pistol", "pistol.png"),
    new WeaponType("Rapier", "rapier", "rapier.png"),
    new WeaponType("Nunchaku", "nunchaku", "nunchaku.png"),
    new WeaponType("Shuriken", "shuriken", "shuriken.png"),
    new WeaponType("Sniper Rifle", "sniper_rifle", "sniper_rifle.png"),
    new WeaponType("Spear", "spear", "spear.png"),
    new WeaponType("Throw", "throw", "throw.png"),
    new WeaponType("Tonfa", "tonfa", "tonfa.png"),
    new WeaponType("Two Handed Sword", "btwo_handed_sword", "two_handed_sword.png"),
    new WeaponType("Whip", "whip", "whip.png"),
]

export default weaponTypes;