<template>
  <div class="gdb-image-container">
    <div class="gdb-image-loader">
      <hollow-dots-spinner v-if="loading" :animation-duration="1500" :size="60" :color="'#FFF'"/>
    </div>
      <div class="gdb-image" v-if="!loading" :style="style"></div>
  </div>
</template>

<script>
import ImageUtil from "@/modules/shared/utils/image.util";
import { HollowDotsSpinner } from "epic-spinners";

export default {
  created() {
    this.loadImage(this.src);
  },
  components: {
    "hollow-dots-spinner": HollowDotsSpinner
  },
  data() {
    return {
      image: undefined,
      loading: true,
      style: {
        backgroundImage: undefined
      }
    };
  },
  methods: {
    async loadImage(url) {
      this.image = await ImageUtil.preloadImage(
        url,
        this.loadHandler,
        this.errorHandler
      );
    },
    errorHandler(err) {
      console.log(err);
    },
    loadHandler() {
      this.style.backgroundImage = `url(${this.image.result})`;
      this.loading = false;
    }
  },
  props: {
    src: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.gdb-image-container,
.gdb-image {
  height: 100%;
  width: 100%;
}
.gdb-image-container {
  display: flex;
  align-items: center;
  justify-items: center;
}
.gdb-image-loader {
  margin: 0 auto;
}
.gdb-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>