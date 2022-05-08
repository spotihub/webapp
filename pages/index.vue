<template>
  <v-container>
    <GithubLoginCard />

  </v-container>
</template>

<script>
import GithubLoginCard from "~/components/cards/github-login-card.vue";
export default {
  name: "IndexPage",
  components: { GithubLoginCard }
}
</script>
