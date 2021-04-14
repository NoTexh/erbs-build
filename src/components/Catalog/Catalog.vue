<template>
  <div id ="Catalog">
    <h1>Catalog</h1>



    <b-container fluid>

      <b-row v-for="location in this.locationsListe" :key="location.name">
        <LocationField :locationName="location.name" :locationItems="location.items" />
      </b-row>

    </b-container>

      
  </div>
</template>

<script>
import locationsListe from "../../models/locationsListe";
import LocationField from './LocationField.vue';

export default {
  name: 'Catalog',
  components: { LocationField },

  data() {
    return {
      locationsListe,
    };
  },
};
</script>

<style scoped>
</style>