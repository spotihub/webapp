<template>
  <v-card max-width="50rem" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Spotify
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Status: not linked
        </v-list-item-title>
        <v-list-item-subtitle>Link your Spotify account with SpotiHub</v-list-item-subtitle>
      </v-list-item-content>

      <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
    </v-list-item>

    <v-card-actions>
      <v-btn class="ml-auto" text @click.stop="linkSpotify">
        Link Spotify
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SpotifyLinkCard',
  data() {
    return {}
  },
  methods: {
    async linkSpotify() {
      var { data: link } = await this.$axios.get(`${this.$config.endpoints.api}/api/integration/spotify`)

      window.location.assign(link)
    }
  }
}
</script>
