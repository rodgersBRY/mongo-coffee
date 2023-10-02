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
  --primary-color: rgb(123,28,68);
  --primary-red-color: #A63838;
  --accent-yellow-color: rgb(205,166,95);
  --faded-white-color: #F2F2F2;
}

.vapp {
  font-family: 'Montserrat', sans-serif;
}
</style>
