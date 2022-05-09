<template>
  <v-container>
    <GithubLoginCard v-if="!loggedIn" />

  </v-container>
</template>

<script lang="ts">
import GithubLoginCard from "~/components/cards/github-login-card.vue";
import auth from "~/mixins/auth";
import device from "~/mixins/device";

export default {
  name: "IndexPage",
  components: { GithubLoginCard },
  mixins: [auth, device]
}
</script>
