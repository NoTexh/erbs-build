<template>
  <div class="weapon" @click="test()">
    <div class="icon">
      <img :src="getPictureForName()" v-bind:alt="name + 'weapon'" />
    </div>
    <div class="name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    imageName: String,
  },
  methods: {
    test: function () {
      alert(this.name);
    },
    getPictureForName() {
      return require("../assets/weapontypes/" + this.imageName);
    },
  },
};
</script>

<style scoped>
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
</style>