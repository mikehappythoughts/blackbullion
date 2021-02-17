<template>
  <div>
    <h1 class="title">You got an error</h1>
    <p class="description">
      There was a problem fetching the app data.<br />Press refresh to try
      again.
    </p>
  </div>
</template>
<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style scoped>
.title {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: var(--gutter);
  color: var(--purple);
}

.description {
  margin-bottom: var(--gutter);
}
</style>
