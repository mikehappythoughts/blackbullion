<template>
  <!-- source from https://codepen.io/alligatorio/pen/zWvpRp
  updated by mike :) -->
  <ul class="pagination">
    <li>
      <button
        class="pagination-end-item"
        type="button"
        :disabled="isInFirstPage"
        aria-label="Go to first page"
        @click="onClickFirstPage"
      >
        First
      </button>
    </li>

    <li>
      <button
        class="pagination-end-item"
        type="button"
        :disabled="isInFirstPage"
        aria-label="Go to previous page"
        @click="onClickPreviousPage"
      >
        Previous
      </button>
    </li>

    <li v-for="page in pages" :key="page.name">
      <button
        class="pagination-item"
        type="button"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
        :aria-label="`Go to page number ${page.name}`"
        @click="onClickPage(page.name)"
      >
        {{ page.name }}
      </button>
    </li>

    <li>
      <button
        class="pagination-end-item"
        type="button"
        :disabled="isInLastPage"
        aria-label="Go to next page"
        @click="onClickNextPage"
      >
        Next
      </button>
    </li>

    <li>
      <button
        class="pagination-end-item"
        type="button"
        :disabled="isInLastPage"
        aria-label="Go to last page"
        @click="onClickLastPage"
      >
        Last
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'BBPagination',
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 2,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1
      }

      return this.currentPage - 1
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      )
    },
    pages() {
      const range = []

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        })
      }

      return range
    },
    isInFirstPage() {
      return this.currentPage === 1
    },
    isInLastPage() {
      return this.currentPage === this.totalPages
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1)
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages)
    },
    isPageActive(page) {
      return this.currentPage === page
    },
  },
}
</script>
<style>
.pagination {
  list-style-type: none;
  display: flex;
}

.pagination-item {
  width: 30px;
  height: 40px;
}

.pagination-end-item {
  width: 60px;
  height: 40px;
}

.pagination-item,
.pagination-end-item {
  margin-right: 0;
  cursor: pointer;
  background-color: var(--light-lilac);
  border: 1px solid var(--purple);
}

.active {
  background-color: var(--purple);
  color: #ffffff;
}

@media (min-width: 600px) {
  .pagination-item,
  .pagination-end-item {
    margin-right: var(--gutter);
  }

  .pagination-item {
    width: 40px;
    height: 40px;
  }
}
</style>
