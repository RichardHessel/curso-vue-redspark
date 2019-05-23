<template>
  <div class="game-main-view">
    <template v-for="platform in platforms">
        <gdb-platform-wrapper :platform="platform" :key="platform" >
          <gdb-card-list  :gameList="games[platform]" />
        </gdb-platform-wrapper>
    </template>
  </div>
</template>


<script>
import Vue from 'vue'

import { IGDB_PLATFORMS } from "@/config/constants";

import GdbCardList from "@/modules/shared/components/gdb-card-list.vue";
import GameService from "@/modules/games/services/games.service";
import GdbPlatformWrapper from '@/modules/games/components/gdb-platform-wrapper.vue'

export default {
  components: {
    'gdb-platform-wrapper': GdbPlatformWrapper,
    'gdb-card-list': GdbCardList,
  },
  async created() {
    this.platforms.map(async (platform) => {
      const result = await GameService.mostPopularByPlatform(platform)
      
      console.log('games ====> ', result)

      Vue.set(this.games, platform, result) // criar reatividade para objetos que não existem dentro do vue

    })
  },
  data() {
    return {
      platforms: Object.values(IGDB_PLATFORMS),
      games: {}
    };
  }
};
</script>

