<template>
  <div class="location">
    <h1>{{ locationName }}</h1>

    <div v-for="item in locationItems" v-bind:key="item.id">
        <p>sss</p>
    </div>

    
    <ul>
        <li v-for="item in locationItems" v-bind:key="item.id">    {{ item.name }}  {{ item.amount }} </li>
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
  props: {
    locationName: String,
    locationItems: Array,
  },
};
</script>

<style scoped>
</style>