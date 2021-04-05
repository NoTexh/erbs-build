<template>
  <div>
    <h1>Test</h1>
    <h2>{{ $route.params.weaponName }}</h2>
    <ul>
      <li v-for="axe in axes" :key="axe.name">
        <p v-for="(index, value) in axe" :key="value.value">
          {{ value }} : {{ index }}
        </p>
      </li>
    </ul>
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
  name: "PlanningTool",
};
</script>

<style scoped>
</style>