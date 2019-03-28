<template>
  <textarea
    ref="textarea"
    :id="elementId"
    :class="textareaClass"
    :style="textareaStyles"
    :value="currentValue"
    :autocomplete="autocomplete"
    :spellcheck="spellcheck"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
    :maxlength="maxLength"
    :readonly="readonly"
    :name="name"
    :autofocus="autofocus"
    @keyup.enter="handleEnter"
    @keyup="handleKeyup"
    @keypress="handleKeypress"
    @keydown="handleKeydown"
    @focus="handleFocus"
    @blur="handleBlur"
    @input="handleInput"></textarea>
</template>

<script>
import calcTextareaHeight from './calcTextareaHeight';

const prefix = 'auto-textarea';

export default {
  name: 'auto-textarea',
  props: {
    elementId: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxLength: Number,
    disabled: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 2
    },
    readonly: {
      type: [Boolean, String],
      default: false,
    },
    name: String,
    number: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    spellcheck: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
    autosize: {
      type: Object,
      default: () => ({}),
    }
  },
  data() {
    return {
      currentValue: this.value,
      prefix: prefix,
      textareaStyles: {}
    }
  },
  computed: {
    textareaClass() {
      return [
        this.prefix,
        {[`${this.prefix}-disabled`]: this.disabled}
      ]
    }
  },
  mounted() {
    this.resizeTextarea();
  },
  methods: {
    handleEnter(event) {
      this.$emit('on-enter', event);
    },
    handleKeyup(event) {
      this.$emit('on-keyup', event);
    },
    handleKeypress(event) {
      this.$emit('on-keypress', event);
    },
    handleKeydown(event) {
      this.$emit('on-keydown', event);
    },
    handleFocus(event) {
      this.$emit('on-focus', event);
    },
    handleBlur(event) {
      this.$emit('on-blur', event);
    },
    handleInput(event) {
      let value = event.target.value;
      if (this.number) {
        value = Number.isNaN(Number(value)) ? value : Number(value);
      }
      this.$emit('input', value);
      this.$emit('on-change', event);
      this.setCurrentValue(value);
    },
    setCurrentValue(value) {
      if (value === this.currentValue) {
        return;
      }
      this.currentValue = value;
      this.$nextTick(this.resizeTextarea)
    },
    resizeTextarea() {
      const { minRows, maxRows } = this.autosize;
      this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
    focus() {
      this.$refs.textarea.focus();
    },
    blur() {
      this.$refs.textarea.blur();
    },
    handleClear() {

    }
  },
  watch: {
    value(newValue) {
      this.setCurrentValue(newValue);
    }
  }
}
</script>

<style lang="less" scoped>
.auto-textarea{
  width: 100%;
  &::placeholder{
    color: rgba(34, 34, 36, 0.4);
  }
  &-disabled{
    background-color: #dfdbdb;
  }
}
</style>
