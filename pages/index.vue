<template>
  <section class="text-center mt-16 container mx-auto">
    <h1 class="text-4xl my-5">Keeping Score</h1>
    <Player v-for="(player, index) in players" :key="index" :name="player"></Player>
  </section>
</template>

<script>
import Player from "@/components/Player"

export default {
  components: {
    Player
  },
  data: () => ({
    players: new Array(5).fill("player")
  })
};
</script>
<style lang="scss" scoped>

</style>