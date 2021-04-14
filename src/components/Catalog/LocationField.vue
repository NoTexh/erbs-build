<template>
  <div class="location">
    <h1>{{ locationName }}</h1>

    <ul>
      <li v-for="locationItem in locationItems" v-bind:key="locationItem.id">
        {{ locationItem.item.name }} {{ locationItem.amount }}
      </li>
    </ul>

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