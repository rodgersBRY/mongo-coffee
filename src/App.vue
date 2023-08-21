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
  --primary-green-color: #09402C;
  --primary-red-color: #A63838;
  --accent-yellow-color: #F2B56B;
  --faded-white-color: #F2F2F2;
}

.vapp {
  font-family: 'Montserrat', sans-serif;
}
</style>
