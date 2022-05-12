<template>
  <v-container>
    <v-row>
      <v-col>
        <GithubLoginCard v-if="!loggedIn" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <SpotifyLinkCard v-if="loggedIn && !spotifyIsLinked" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <SpotifyInfoCard v-if="loggedIn && spotifyIsLinked" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <GithubInfoCard v-if="loggedIn" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GithubLoginCard from "~/components/cards/github-login-card.vue";
import SpotifyLinkCard from "~/components/cards/spotify-link-card.vue";
import GithubInfoCard from "~/components/cards/github-info-card.vue";
import SpotifyInfoCard from "../components/cards/spotify-info-card.vue";
import auth from "~/mixins/auth";
import device from "~/mixins/device";

export default {
  name: "IndexPage",
  components: { GithubLoginCard, SpotifyLinkCard, GithubInfoCard, SpotifyInfoCard },
  mixins: [auth, device],
  computed: {
    spotifyIsLinked() {
      return this.user.integrations.spotify
    }
  }
}
</script>
