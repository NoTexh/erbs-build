<template>
  <div class="hello">
    <div class="weapons">
      <h1>
        Select Weapon Type <i class="fas fa-dice" onclick="bravery(0)"></i>
      </h1>

      <div class="weapon" data-weapon="axe">
        <div class="icon"><img src="../assets/axe.png" /></div>
        <div class="name">Axe</div>
      </div>

      <div class="weapon" data-weapon="assault_rifle">
        <div class="icon"><img src="../assets/assault_rifle.png" /></div>
        <div class="name">Assault Rifle</div>
      </div>

      <div class="weapon" data-weapon="bat">
        <div class="icon"><img src="../assets/bat.png" /></div>
        <div class="name">Bat</div>
      </div>

      <div class="weapon" data-weapon="bow">
        <div class="icon"><img src="../assets/boww.png" /></div>
        <div class="name">Bow</div>
      </div>

      <div class="weapon" data-weapon="crossbow">
        <div class="icon"><img src="../assets/crossboww.png" /></div>
        <div class="name">Crossbow</div>
      </div>

      <div class="weapon" data-weapon="dagger">
        <div class="icon"><img src="../assets/dagger.png" /></div>
        <div class="name">Dagger</div>
      </div>

      <div class="weapon" data-weapon="dual_swords_(dagger)">
        <div class="icon"><img src="../assets/dual_swords.png" /></div>
        <div class="name">Dual Swords (dagger)</div>
      </div>

      <div class="weapon" data-weapon="dual_swords_(sword)">
        <div class="icon"><img src="../assets/dual_swords.png" /></div>
        <div class="name">Dual Swords (sword)</div>
      </div>

      <div class="weapon" data-weapon="glove">
        <div class="icon"><img src="../assets/glove.png" /></div>
        <div class="name">Glove</div>
      </div>

      <div class="weapon" data-weapon="guitar">
        <div class="icon"><img src="../assets/guitar.png" /></div>
        <div class="name">Guitar</div>
      </div>

      <div class="weapon" data-weapon="hammer">
        <div class="icon"><img src="../assets/hammerw.png" /></div>
        <div class="name">Hammer</div>
      </div>

      <div class="weapon" data-weapon="pistol">
        <div class="icon"><img src="../assets/pistol.png" /></div>
        <div class="name">Pistol</div>
      </div>

      <div class="weapon" data-weapon="rapier">
        <div class="icon"><img src="../assets/rapierw.png" /></div>
        <div class="name">Rapier</div>
      </div>

      <div class="weapon" data-weapon="nunchaku">
        <div class="icon"><img src="../assets/nunchakuw.png" /></div>
        <div class="name">Nunchaku</div>
      </div>

      <div class="weapon" data-weapon="shuriken">
        <div class="icon"><img src="../assets/shuriken.png" /></div>
        <div class="name">Shuriken</div>
      </div>

      <div class="weapon" data-weapon="sniper_rifle">
        <div class="icon"><img src="../assets/sniper_rifle.png" /></div>
        <div class="name">Sniper Rifle</div>
      </div>

      <div class="weapon" data-weapon="spear">
        <div class="icon"><img src="../assets/spear.png" /></div>
        <div class="name">Spear</div>
      </div>

      <div class="weapon" data-weapon="throw">
        <div class="icon"><img src="../assets/throw.png" /></div>
        <div class="name">Throw</div>
      </div>

      <div class="weapon" data-weapon="tonfa">
        <div class="icon"><img src="../assets/tonfaw.png" /></div>
        <div class="name">Tonfa</div>
      </div>

      <div class="weapon" data-weapon="two_handed_sword">
        <div class="icon"><img src="../assets/two_handed_sword.png" /></div>
        <div class="name">Two Handed Sword</div>
      </div>

      <div class="weapon" data-weapon="whip">
        <div class="icon"><img src="../assets/whipw.png" /></div>
        <div class="name">Whip</div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  border-radius: 4px;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.5px;
}

.weapon {
  background-color: #234744;
  display: inline-flex;
  width: 225px;
  align-items: center;
  color: white;
  height: 100px;
  font-size: 12pt;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
}

.icon img {
  width: 50px;
  height: 50px;
  margin-right: 5px;
  margin-left: 20px;
  background: black;
  transform: translateY(2px);
}

.name {
  padding-right: 10px;
}

h1 {
  color: white;
  text-align: center;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 16pt;
}

body {
  background: #101030;
  padding: 0px;
  text-align: center;
  overflow: hidden;
}

.weapons {
  margin-left: auto;
  margin-right: auto;
  width: 1224px;
  max-width: 1224px;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
  font-family: sans-serif;
}

</style>