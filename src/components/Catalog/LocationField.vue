<template>
  <div class="location">
    <h1>{{ locationName }}</h1>

    <ul>
      <li v-for="item in locationItems" v-bind:key="item.id">
        {{ item.itemName.name }} {{ item.amount }}
      </li>
    </ul>

    <!--
    <ul>
      <li v-for="{itemName, amount, id} in locationItems" :key="id">{{ itemName }} {{ amount }}</li>
    </ul>
    -->
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  props: {
    locationName: String,
    locationItems: Array,
  },
};
</script>

<style scoped>
</style>