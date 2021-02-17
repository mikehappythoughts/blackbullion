<template>
  <div class="error-404">
    <h1 class="title">You got a <br />404 Error</h1>
    <p class="description">
      The link you clicked on may be broken or no longer exist.
    </p>
    <p>
      <nuxt-link to="/">Go to home page</nuxt-link>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style scoped>
.error-404 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--white);
  padding: 1em;
  max-width: 300px;
  width: 100%;
  text-align: center;
}
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
