<template>
  <input
    v-bind="$attrs"
    :value="value"
    v-on="{
      ...$listeners,
      input: (event) => handleInput(event),
    }"
  />
</template>

<script>
export default {
  name: 'BBInputText',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>
<style scoped lang="scss"></style>
