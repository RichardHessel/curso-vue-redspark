<template>
  <div class="gdb-flipper-card" @click="toggleFlip">
    <transition name="flip" mode="out-in">
      <keep-alive> <!-- não funciona comm componentes funcionais -->
        <component :is="currentComponent" :game="game"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Game from "@/modules/games/models/game.model";
import GdbCard from "@/modules/shared/components/gdb-card.vue";
import GdbCardPlaceholder from "@/modules/shared/components/gdb-card-placeholder.vue";

export default {
  components: {
    "gdb-card": GdbCard,
    "gdb-card-placeholder": GdbCardPlaceholder
  },
  props: {
    game: { type: Game, required: true }
  },
  data() {
    return {
      flipped: false
    };
  },
  computed: {
    currentComponent() {
      return this.flipped ? "gdb-card-placeholder" : "gdb-card";
    }
  },
  methods: {
    toggleFlip() {
      this.flipped = !this.flipped;
    }
  }
};
</script>

<style lang="scss" scoped>
.gdb-flipper-card {
  perspective: $cardHeight * 10;
}
</style>