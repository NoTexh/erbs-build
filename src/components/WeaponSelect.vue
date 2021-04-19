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

        <column :xs="12" :md="3" :lg="2" v-for="weaponType in this.weaponTypes" :key="weaponType.displayName">
          <weapon-field :name="weaponType.displayName" :pathName="weaponType.pathName" :imageName="weaponType.imageName" />
        </column>
      </row>
    </div>
  </div>
</template>

<script>
import WeaponField from "./WeaponField.vue";
import weaponTypes from "../models/weaponTypes"

export default {
  components: { WeaponField },
 data() {
    return {
      weaponTypes,
    };
  },
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