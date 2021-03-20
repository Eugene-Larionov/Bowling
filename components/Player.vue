<template>
  <div class="player-container my-10">
    <div class="flex justify-center align-center my-4">
      <span class="mr-10 text-xl">Name: {{ name }}</span>
      <span class="text-xl">Score: {{ totalScore }}</span>
    </div>
    <div class="frames-container">
      <Frame
        v-for="index in 10"
        :key="index"
        :frame-index="index"
        @onChange="onChangeScore"
      ></Frame>
    </div>
  </div>
</template>

<script>
import Frame from "./Frame";
import { bowlingScore } from "@/functions/bowling.js";

export default {
  name: "Player",
  components: {
    Frame,
  },
  props: {
    name: {
      type: String,
      default: "test",
    },
    playerIndex: {
      type: Number,
    },
  },
  data() {
    return {
      scores: new Array(10).fill({
        first: null,
        second: null,
        third: null,
      }),
      totalScore: 0,
    };
  },
  methods: {
    onChangeScore(value, frameIndex) {
      this.scores[frameIndex - 1] = value;
      const rolls = this.scores.reduce((result, score) => {
        const newScore = Object.values(score).reduce((res, element, index) => {
          if (frameIndex !== 10 && index === 2) res = res;
          else {
            if (score["first"] === "X" || score["first"] === "x") {
              if (index === 0)
                res = [...res, 10];
              else res = res
            } else {
              if (element === "/")
                res = [...res, 10 - Number(score["first"])];
              else if (element === null || element === "_" || element === "-")
                res = [...res, 0];
              else res = [...res, Number(element)];
            }
          }

          return res;
        }, []);
        return [...result, ...newScore];
      }, []);
      console.log(rolls);
      this.totalScore = bowlingScore(rolls);
      // this.updateScore(value, playerIndex);
    },
  },
};
</script>
<style lang="scss" scoped>
.frames-container {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  ::v-deep .frame-container:last-child {
    border-right-width: 1px;
  }
}
</style>