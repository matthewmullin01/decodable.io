<template>
  <div class="wrapper container">
    <div class="textarea-wrapper">
      <transition name="slide-fade-h">
        <TextAreaOverlay v-if="!text" class="overlay" />
      </transition>

      <label v-show="!text" for="textarea">Start typing away</label>
      <textarea id="textarea" rows="32" v-model="text"></textarea>
    </div>

    <transition name="slide-fade-v">
      <div v-if="text" class="output">
        <pre>{{decodedText}}</pre>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import TextAreaOverlay from "./TextAreaOverlay.vue";

export default {
  components: {
    TextAreaOverlay,
  },
  setup() {
    const text = ref("");

    const isBase64 = (str: string): boolean => {
      if (!str || str === "" || str.trim() === "") {
        return false;
      }
      try {
        return btoa(atob(str)) === str;
      } catch (err) {
        return false;
      }
    };

    const decodedTextFn = (): string => {
      // aGVsbG9tb3RvdCBkYXMKZGFzZmRhcw==
      const rawWords = text.value.split(/ |(\r?\n)/);
      const convertedWords = rawWords.map((word: string) => {
        if (isBase64(word)) {
          return atob(word);
        }
        return word;
      });
      const fullSentence = convertedWords.join(" ").replace(/(\r?\n) /g, "$1");

      return fullSentence;
    };

    const decodedText = ref(computed(() => decodedTextFn()));

    return {
      text,
      decodedText,
    };
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("textarea")!.focus();
  },
};
</script>

<style scoped lang="scss">
$border-color: #e3e3e3;
$border-width: 28px;

.wrapper {
  text-align: left;
}

.textarea-wrapper {
  border-left: $border-width solid $border-color;
  padding-left: 20px;
  overflow: hidden;
}

label {
  position: absolute;
  font-family: monospace;
  white-space: pre;
  color: $color-text-primary;
}

textarea {
  width: 100%;
  outline: none;
  resize: none;
  border: none;
}

.overlay {
  position: absolute;
  pointer-events: none;
}

.output {
  margin-top: 2em;
  background: #e3e3e3;
  color: darken($color-text-primary, 15);
  padding: 1em 1.5em;
  max-height: 500px;
  overflow: hidden;
  overflow: scroll;

  pre {
    margin: 0;
  }
}

.slide-fade-h-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-h-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-h-enter-from,
.slide-fade-h-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-v-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-v-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-v-enter-from,
.slide-fade-v-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
