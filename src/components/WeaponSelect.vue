<template>
  <div class="hello">
    <div class="weapons">
      <h1>
        Select Weapon Type <i class="fas fa-dice" onclick="bravery(0)"></i>
      </h1>

      <row :gutter="12">
        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/axe.png" /></div>
            <div class="name">Axe</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/assault_rifle.png" /></div>
            <div class="name">Assault Rifle</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/bat.png" /></div>
            <div class="name">Bat</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/bow.png" /></div>
            <div class="name">Bow</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/crossbow.png" /></div>
            <div class="name">Crossbow</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/dagger.png" /></div>
            <div class="name">Dagger</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/dual_swords.png" /></div>
            <div class="name">Dual Swords (Dagger)</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/dual_swords.png" /></div>
            <div class="name">Dual Swords (Sword)</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/glove.png" /></div>
            <div class="name">Gloves</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/guitar.png" /></div>
            <div class="name">Guitar</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/hammerw.png" /></div>
            <div class="name">Hammer</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/pistol.png" /></div>
            <div class="name">Pistol</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/rapierw.png" /></div>
            <div class="name">Rapier</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/nunchakuw.png" /></div>
            <div class="name">Nunchaku</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/shuriken.png" /></div>
            <div class="name">Shuriken</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/sniper_rifle.png" /></div>
            <div class="name">Sniper Rifle</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/spear.png" /></div>
            <div class="name">Spear</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/throw.png" /></div>
            <div class="name">Throw</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/tonfaw.png" /></div>
            <div class="name">Tonfa</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/two_handed_sword.png" /></div>
            <div class="name">Two Handed Sword</div>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2">
          <div class="weapon">
            <div class="icon"><img src="../assets/whip.png" /></div>
            <div class="name">Whip</div>
          </div>
        </column>
      </row>
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
  align-items: center;
  width: 100%;
  color: white;
  font-size: 12pt;
  cursor: pointer;
  height: 100px;
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