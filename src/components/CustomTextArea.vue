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
      <div v-if="text" class="output-wrapper">
        <div class="control-wrapper">
          <SegmentControl class="SegmentControl" v-model:value="mode" :segments="modeSegments" />
        </div>
        <div class="output-text-block">
          <pre>{{ outputText }}</pre>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import TextAreaOverlay from "./TextAreaOverlay.vue";
import SegmentControl from "./SegmentControl.vue";

export default {
  components: {
    TextAreaOverlay,
    SegmentControl,
  },
  data() {
    return {
      modeSegments: [
        {
          title: "Encode",
          id: "encode",
        },
        {
          title: "Auto",
          id: "auto",
        },
        {
          title: "Decode",
          id: "decode",
        },
      ],
    };
  },
  setup() {
    const mode = ref("auto");
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

    const encodedTextFn = (): string => {
      // aGVsbG9tb3RvdCBkYXMKZGFzZmRhcw==

      const encoded = btoa(text.value);

      return encoded;
    };

    // const decodedText = ref(computed(() => decodedTextFn()));
    // const encodedText = ref(computed(() => encodedTextFn()));
    const outputText = ref(
      computed(() => (mode.value === "encode" ? encodedTextFn() : decodedTextFn())),
    );

    return {
      mode,
      text,
      outputText,
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

.control-wrapper {
  // width: 560px;
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

.output-wrapper {
  margin-top: 2em;
  max-height: 500px;

  .output-text-block {
    color: darken($color-text-primary, 15);
    padding: 1em 1.5em;
    margin-top: 0.4em;
    background: #e3e3e3;
    overflow: hidden;
    overflow: scroll;
    pre {
      margin: 0;
    }
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
