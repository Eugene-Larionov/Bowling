<template>
  <div class="frame-container">
    <div>{{ frameIndex }}</div>
    <div class="grid grid-cols-3 border input-wrapper text-right">
      <ValidationProvider
        :rules="{ regex: /(?<!\S)[0-9Xx/_-](?!\S)/ }"
        v-slot="{ errors }"
      >
        <input
          v-model="score.first"
          name="first_score"
          class="score-input"
          type="text"
          @change="onChange"
        />
        <span v-if="errors.length" id="error">Error</span>
      </ValidationProvider>
      <ValidationProvider
        :rules="{ regex: /(?<!\S)[0-9Xx/_-](?!\S)/ }"
        v-slot="{ errors }"
      >
        <input
          v-model="score.second"
          name="second_score"
          class="score-input"
          type="text"
          @change="onChange"
        />
        <span v-if="errors.length" id="error">Error</span>
      </ValidationProvider>
      <ValidationProvider
        v-if="frameIndex === 10"
        :rules="{ regex: /(?<!\S)[0-9Xx/_-](?!\S)/ }"
        v-slot="{ errors }"
      >
        <input
          v-model="score.second"
          name="second_score"
          class="score-input"
          type="text"
          @change="onChange"
        />
        <span v-if="errors.length" id="error">Error</span>
      </ValidationProvider>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: "Frame",
  components: { ValidationProvider },
  props: ['frameIndex'],
  data() {
    return {
      score: () => {},
    };
  },
  methods: {
    onChange() {
      this.$emit("onChange", this.score, this.frameIndex)
    }
  },
  mounted() {
    this.score = {
      first: null,
      second: null
    };
  },
};
</script>

<style lang="scss" scoped>
.frame-container {
  border: 1px solid rgba(107, 114, 128);
  border-right-width: 0;
  .input-wrapper {
    span:last-child {
      .score-input {
        border-right-width: 1px;
      }
    }
    .score-input {
      @apply border py-2 px-3 w-full border-r-0 text-center;
      border-color: rgba(107, 114, 128);
      &:focus {
        @apply outline-none border-transparent;
        box-shadow: 0 0 0 1px;
      }
    }
  }
  #error {
    color: #b91c1c;
  }
}
</style>