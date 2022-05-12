<template>
  <div class="splash-screen">
    <v-overlay color="background" opacity="100">
      <v-progress-circular :size="150" color="primary" indeterminate />
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  layout: 'loading',
  components: {},
  created() {
    const token = this.$route.query.token;
    const refreshToken = this.$route.query.refreshToken;
    this.$auth.setUserToken(token, refreshToken)
      .then(() => this.$nuxt.$router.replace({ path: '/' }));
  }
}
</script>

<style scoped>
.splash-screen {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 50;
}
</style>
