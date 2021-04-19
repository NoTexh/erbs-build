<template>
  <router-link :to="'/planning/' + pathName">
    <div class="weapon">
      <div class="icon">
        <img :src="getPictureForName()" v-bind:alt="name + 'weapon'" />
      </div>
      <div class="name">{{ name }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    name: String,
    pathName: String,
    imageName: String
  },
  methods: {
    getPictureForName() {
      return require("../assets/weapontypes/" + this.imageName);
    },
  },
};
</script>

<style scoped>
.weapon {
  background: #234744;
  display: inline-flex;
  align-items: center;
  width: 100%;
  color: white;
  font-size: 12pt;
  cursor: pointer;
  height: 100px;
  border-radius: 10px;
  transition: background-color 0.5s ease;
}

.weapon:hover {
  background: #39746f;
}

a {
  text-decoration: none;
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