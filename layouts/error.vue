<template>
  <div class="error-container">
    <div class="error-image">
      <img
        src="~assets/piggy-404.jpg"
        alt="purple pig with gold coins on floor"
      />
    </div>

    <!-- error components added here -->
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error404 from '~/components/error/404.vue'
import error500 from '~/components/error/500.vue'
export default {
  name: 'NuxtError',
  layout: 'errorlayout', // optional
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404
      }
      // catch everything else
      return error500
    },
  },
}
</script>
<style scoped>
.error-container {
  max-width: var(--max-width);
  background-color: var(--white);
  padding: 1em;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--card-box-shadow);
}

.error-image {
  max-width: 300px;
}

@media (min-width: 600px) {
  .error-container {
    flex-direction: row;
  }
}
</style>
