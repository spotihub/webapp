<template>
  <v-app>
    <v-app-bar app flat>
      <v-toolbar-title>SpotiHub</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return { }
  }
}
</script>
