<template>
  <div>
    <template v-for="(tag) in keyResults">
      <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
        <a-tag :key="tag" closable="true" :afterClose="() => handleClose(tag)">
          {{`${tag.slice(0, 20)}...`}}
        </a-tag>
      </a-tooltip>
      <a-tag v-else :key="tag" closable="true" :afterClose="() => handleClose(tag)">
        {{tag}}
      </a-tag>
    </template>
    <a-input
      v-if="inputVisible"
      ref="input"
      type="text"
      size="small"
      :style="{ width: '78px' }"
      :value="inputValue"
      @change="handleInputChange"
      @blur="handleInputConfirm"
      @keyup.enter="handleInputConfirm"
    />
    <a-tag v-else @click="showInput" style="background: #fff; borderStyle: dashed;">
      <a-icon type="plus" /> New Key Result
    </a-tag>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // tags: ['Tag 2', 'Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3'],
      inputVisible: false,
      inputValue: '',
    };
  },
  props: {
    keyResults: Array,
  },
  methods: {
    handleClose(removedTag) {
      const keyResults = this.keyResults.filter(tag => tag !== removedTag);
      console.log(keyResults);
      this.keyResults = keyResults;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const { inputValue } = this;
      const { keyResults } = this;
      const len = keyResults.length;
      if (inputValue && keyResults.indexOf(inputValue) === -1) {
        // keyResults = [...keyResults, inputValue];
        this.$set(keyResults, len, inputValue);
      }
      console.log(keyResults);
      Object.assign(this, {
        keyResults,
        inputVisible: false,
        inputValue: '',
      });
    },
  },
};
</script>
