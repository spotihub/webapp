<template>
  <v-card max-width="50rem" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Spotify
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Status: linked
        </v-list-item-title>
        <v-list-item-subtitle>Your spotify account {{ user.integrations.spotify }} is working correctly.</v-list-item-subtitle>
      </v-list-item-content>

      <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
    </v-list-item>

    <!-- <v-card-actions>
      <v-btn class="ml-auto" text @click.stop="linkSpotify">
        Link Spotify
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
import auth from '~/mixins/auth'
import device from '~/mixins/device'

export default {
  name: 'SpotifyInfoCard',
  mixins: [auth, device],
  data() {
    return {}
  },
  methods: { }
}
</script>
