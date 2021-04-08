<template>
  <div>
    <h1>Test</h1>
    <h2>{{ $route.params.weaponName }}</h2>
    <div class="item-list">
      <div class="item" v-for="axe in axes" :key="axe.name">
        <div class="item-icon" v-bind:class="axe.rarity"><img :src="getPictureForName(axe.icon)" /></div>
        <div class="name">{{ axe.name }}</div>
      </div>
    </div>

    <div class="shop">
      <div
        class="shop-weapon shop-item"
        data-target="weapon"
        data-label="Weapon"
      >
        Weapon
      </div>
      <div class="shop-head shop-item" data-target="head" data-label="Head">
        Head
      </div>
      <div data-label="Chest" class="shop-chest shop-item" data-target="chest">
        Chest
      </div>
      <div data-label="Arm" data-target="arm" class="shop-arm shop-item">
        Arm
      </div>
      <div data-target="leg" class="shop-leg shop-item" data-label="Leg">
        Leg
      </div>
      <div
        data-target="accessory"
        class="shop-accessory shop-item"
        data-label="Accessory"
      >
        Accessory
      </div>
    </div>
  </div>
</template>

<script>
import axes from "../models/axes";

export default {
  data() {
    return {
      axes,
    };
  },
  methods: {
    getPictureForName(url) {
      console.log(url);
      return require("../assets/axes/"+url);
    },
  },
  name: "PlanningTool",
};
</script>

<style scoped>
* {
  border-radius: 4px;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0.5px;
}

.icon img {
  width: 50px;
  height: 50px;
  margin-right: 5px;
  background: black;
  transform: translateY(2px);
}

.name {
  padding-right: 10px;
}

.icon {
  margin-right: 3px;
}

.name {
  padding-right: 10px;
}

.item-list {
  margin-top: 15px;
  border-top: 1px solid #4d5166;
  padding-top: 20px;
  border-radius: 0px;
}

.shop .item-icon {
  width: 100% !important;
  height: 50px !important;
  margin: 0 !important;
}

.shop .item-icon img {
  transform: translateY(-3px);
}

.shop > div {
  background: black;
  width: 31.79%;
  user-select: none;
  display: inline-flex;
  vertical-align: bottom;
  height: 50px;
  overflow: hidden;
  margin-right: 1px;
  border: 2px solid #4d5166;
  margin-right: 1%;
  margin-bottom: 1%;
  color: #4d5166;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.item-icon.Legendary {
  background: linear-gradient(#4d4612, #9e9527);
}
.item-icon.Rare {
  background: linear-gradient(#282b52, #4e4993);
}

.item-icon.Uncommon {
  background: linear-gradient(#28522d, #49934b);
}

.item-icon.Epic {
  background: linear-gradient(#522850, #93498e);
}

.txt-Legendary {
  color: #9e9527;
}

.txt-Rare {
  color: #4e4993;
}

.txt-Epic {
  color: #93498e;
}

.txt-Uncommon {
  color: #49934b;
}

.selected {
  border: 2px solid white !important;
}

.shop > div:last-child,
.shop > div:nth-child(3) {
  margin-right: 0px !important;
}

.item-list .item-icon {
  height: 37px;
}

.item-list .item-icon img {
  height: 37px;
}

.item {
  display: flex;
  width: 100%;
  align-items: center;
  color: white;
  background: #234744;
  /* border: 1px solid gray; */
  margin-bottom: 10px;
  cursor: pointer;
}

.item-icon {
  width: 120px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  /* border: 1px solid #4d5166; */
  height: 52px;
  margin-right: 10px;
}

.item-icon.Common {
  border-color: transparent !important;
}

/* .item-list {
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100% - 190px);
  padding-right: 10px;
} */

@media screen and (max-width: 1366px) {
  .lwright {
    font-size: 8pt !important;
    width: auto !important;
  }
  .lwright img {
    width: 48px !important;
    height: 48px !important;
  }
  .panel > div {
    zoom: 0.7 !important;
    position: absolute !important;
    top: 5px !important;
  }
  .weapon-sel-wrapper {
    transform: translateY(0px) !important;
  }
  .build-wrap {
    height: calc(100vh - 102px) !important;
    transform: translateY(-8px) !important;
  }
  .weapons {
    transform: translateY(2px) !important;
  }
  h1 {
    font-size: 12pt !important;
  }
  .panel,
  .routeitems,
  .buildmats {
    min-height: 235px !important;
    max-height: 235px !important;
    height: 235px !important;
  }
}

</style>