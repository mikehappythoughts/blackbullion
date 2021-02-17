<template>
  <!-- search input -->
  <form class="form">
    <div class="search search--rounded-sm" role="search">
      <span class="search-icon">
        <svg
          aria-hidden="true"
          class="search-button-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.24 30.24"
        >
          <path
            d="M12,0a12,12,0,1,0,7,21.77l7.88,7.89a2,2,0,0,0,2.83,0,2,2,0,0,0,0-2.83L21.77,19A12,12,0,0,0,12,0Zm0,20a8,8,0,1,1,8-8,8,8,0,0,1-8,8Z"
          ></path>
        </svg>
      </span>
      <input
        class="search-input"
        v-bind="$attrs"
        :value="value"
        v-on="{
          ...$listeners,
          input: (event) => handleInput(event),
        }"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'BBSearch',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {}
  },
  methods: {
    handleClick() {
      this.$emit('searchClicked')
    },
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style>
.search {
  display: flex;
  padding: var(--gutter);
  margin-top: var(--gutter);
  margin-right: 1em;
  background-color: var(--white);

  max-height: 35px;
  width: 100%;
  height: 100%;
}

.search-input {
  flex: 1 1 0%;
  outline: none;
  background: none;
  border: none;
  font-size: 1em;
}

.search-icon {
  background-color: var(--white);
  max-width: 22px;
  height: 18px;
  border: none;
  margin-right: 10px;
}

.search-button-svg {
  width: 100%;
  height: 100%;
}

.search--rounded-sm {
  border-radius: 5px;
}

@media (min-width: 600px) {
  .search {
    margin-top: 0;
    max-width: 300px;
    width: 100%;
  }
}
</style>
