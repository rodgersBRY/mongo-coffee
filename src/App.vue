<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
:root {
  --primary-color: #09402C;
  --primary-red-color: #A63838;
  --accent-color: rgb(204,164,90);
  --faded-white-color: #F2F2F2;
}

.vapp {
  font-family: 'Montserrat', sans-serif;
}
</style>
