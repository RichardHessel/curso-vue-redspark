<template>
  <div class="gdb-card">
    <div class="gdb-card-image" :style="{backgroundImage: `url(${imageSrc})` }">
      <div class="gdb-card-info">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ069PJGtU_Rz6eAdvhcg7d9vDySDumWUcNXxWAjhQMZt-roFcK",
      name: "Thanos apareceu por aqui"
    };
  }
};
</script>

<style lang="scss" scoped>
$imageSize: 160px;
.gdb-card {
  color: white;
  background: linear-gradient(
    135deg,
    #{$darkMidGray} 0%,
    #{$darkDeepGray} 100%
  );
  height: $cardHeight;
  width: $cardWidth;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  &:hover {
    .gdb-card-image {
      opacity: 0.8;
    }
  }
  .gdb-card-image {
    opacity: 0.5;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: opacity 0.1s ease-in;
  }
  .gdb-card-info {
    $spacing: 10px;
    padding: $spacing $spacing ($imageSize + $spacing + ($spacing / 2));
    border-radius: 10px;
    position: absolute;
    top: 0;
  }
}
</style>

