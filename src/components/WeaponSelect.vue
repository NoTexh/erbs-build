<template>
  <div class="hello">
    <img id="symbol" alt="Vue logo" src="../assets/headline2.png">
    <div class="weapons">
      <row :gutter="12">
        <column :xs="12" :md="12" :lg="12">
          <div>
            <h1>Select Your Weapon Type!</h1>
          </div>
        </column>

        <column :xs="12" :md="3" :lg="2" v-for="weapon in this.weapons" :key="weapon.name">
          <weapon-field :name="weapon.name" :imageName="weapon.imageName" />
        </column>
      </row>
    </div>
  </div>
</template>

<script>
import WeaponField from "./WeaponField.vue";
export default {
  components: { WeaponField },
  data: () => ({
    weapons: [
      { name: "Axe", imageName: "axe" },
      { name: "Assault Rifle", imageName: "assault_rifle" },
      { name: "Bat", imageName: "bat" },
      { name: "Bow", imageName: "bow" },
      { name: "Crossbow", imageName: "crossbow" },
      { name: "Dual Swords", imageName: "dual_swords" },
      { name: "Glove", imageName: "glove" },
      { name: "Guitar", imageName: "guitar" },
      { name: "Hammer", imageName: "hammer" },
      { name: "Pistol", imageName: "pistol" },
      { name: "Rapier", imageName: "rapier" },
      { name: "Nunchaku", imageName: "nunchaku" },
      { name: "Shuriken", imageName: "shuriken" },
      { name: "Sniper Rifle", imageName: "sniper_rifle" },
      { name: "Spear", imageName: "spear" },
      { name: "Throw", imageName: "throw" },
      { name: "Tonfa", imageName: "tonfa" },
      { name: "Two Handed Sword", imageName: "two_handed_sword" },
      { name: "Whip", imageName: "whip" },
    ],
  }),
  methods: {
    test: function (message) {
      alert(message);
    },
  },
};
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