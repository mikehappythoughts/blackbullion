<template>
  <div class="container">
    <TheHeader>
      <!-- sort drop down -->
      <vue-accessible-select
        v-model="sort"
        :options="options"
        :disabled="false"
        placeholder="Sort by"
      >
      </vue-accessible-select>

      <!-- search -->
      <BBSearch v-model="searchValue" placeholder="Search"></BBSearch>
    </TheHeader>

    <!--  main content -->
    <main>
      <h1 class="main-title">Pathway</h1>
      <!-- notification -->
      <div
        v-if="getLessons === undefined || getLessons.length === 0"
        class="notification"
        role="alert"
        aria-labelledby="notification-message"
      >
        <p id="notification-message" class="notification-item">
          No pathways available
        </p>
      </div>
      <!-- cards -->
      <section class="cards">
        <LazyCard
          v-for="{ title, duration, image, description, url } in getLessons"
          :key="title"
          :title="title"
          :duration="convertToHoursAndMinutes(duration)"
          :imagesrc="image"
          :description="description"
          :url="url"
        ></LazyCard>
      </section>
    </main>
    <footer class="footer">
      <div class="footer-content">
        <BBPagination
          :total-pages="getTotalPages"
          :total="getTotalLessons"
          :per-page="20"
          :current-page="getCurrentPage"
          @pagechanged="onPageChange"
        ></BBPagination>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  async asyncData({ store }) {
    try {
      const res = await fetch(process.env.API_URL)
        .then((res) => res.json())
        .then((data) => data.data)
      store.dispatch('app/setLessons', res)
    } catch (error) {
      throw new Error(error)
    }
  },
  data: () => {
    return {
      sortType: 'asccending',
      searchValue: '',
      sort: undefined,
      lessons: [],
      oldPages: undefined,
      options: [
        {
          value: 'title',
          label: 'title',
        },
        {
          value: 'duration',
          label: 'duration',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('app', [
      'getLessonsByIndex',
      'getAllLessons',
      'getCurrentPage',
      'getTotalLessons',
      'getTotalPages',
      'getlessonPages',
    ]),
    getLessons() {
      const filteredLessons = this.getAllLessons.filter(
        (lesson) =>
          !lesson.title.toLowerCase().indexOf(this.searchValue.toLowerCase())
      )

      if (filteredLessons.length === 0) return []

      if (this.sort === 'title') {
        return this.sortByTitle(filteredLessons)
      } else if (this.sort === 'duration') {
        return this.sortByDuration(filteredLessons)
      } else {
        this.setLessonPages(filteredLessons)
        this.checkIfSearchHasChanged()

        return this.getlessonPages[this.getCurrentPage - 1]
      }
    },
  },

  methods: {
    ...mapMutations('app', ['setCurrentPage']),
    ...mapActions('app', ['setLessonPages']),
    updateTheCurrentPage(pageNumber) {
      this.setCurrentPage(pageNumber)
    },
    checkIfSearchHasChanged() {
      if (this.oldPages !== this.getTotalPages) {
        this.oldPages = this.getTotalPages
        this.updateTheCurrentPage(1)
      }
    },

    sortByTitle(lessons) {
      const sortedItems = lessons.sort(function (a, b) {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
      this.setLessonPages(sortedItems)
      this.checkIfSearchHasChanged()
      return this.getLessonsByIndex
    },
    sortByDuration(lessons) {
      const sortedItems = lessons.sort(function (a, b) {
        const aNum = parseInt(a.duration)
        const bNum = parseInt(b.duration)

        if (aNum < bNum) {
          return -1
        }
        if (aNum > bNum) {
          return 1
        }
        return 0
      })
      this.setLessonPages(sortedItems)
      this.checkIfSearchHasChanged()
      return this.getLessonsByIndex
    },
    convertToHoursAndMinutes(num) {
      const hours = Math.floor(num / 60)
      const minutes = num % 60

      let addZero = minutes < 10 ? `: 0${minutes}mins` : `:  ${minutes}mins`

      if (minutes === 0) addZero = ''

      return `${hours}hr ${addZero}`
    },
    onPageChange(pageNumber) {
      this.oldPages = this.getTotalPages
      this.updateTheCurrentPage(pageNumber)
    },
  },
}
</script>

<style lang="scss">
@import '~vue-accessible-select/src/styles/core.scss';
@import '~vue-accessible-select/src/styles/themes/default.scss';

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  margin-top: 94px;
  margin-bottom: 94px;
  max-width: var(--max-width);
  min-height: calc(100vh - 70px);
  width: 100%;

  padding: 0 var(--gutter);
}

.main-title {
  margin-left: 0.3em;
  color: var(--purple);
  padding-top: 2%;
  text-transform: uppercase;
}

/* cards */
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-right: 2%;
  margin-top: 2%;
}

.notification {
  width: 100%;
  height: calc(100vh - 267px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.notification-item {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  height: 100px;
  padding: 0 2.5em;
  border-radius: var(--border-radius-sm);
  background-color: var(--light-lilac);
  box-shadow: var(--drop-shadow);
}

// footer

.footer {
  position: fixed;
  bottom: 0;
  padding: 0 var(--gutter);
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid var(--purple);
}

.footer-content {
  max-width: var(--max-width);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: calc(var(--gutter) * 2) 0;
  background-color: var(--white);
}

// vue select component custom adjustments
.v-select__inner {
  width: 100%;
}

@media (min-width: 600px) {
  body {
    font-size: 1rem;
  }

  .v-select__inner {
    width: 200px;
    height: 100%;
    padding-right: var(--gutter);
    max-width: 300px;
  }

  .v-select__placeholder,
  .v-select__menu {
    font-size: 0.9rem;
  }

  .v-select__btn {
    height: 100%;
  }

  main {
    margin-top: 60px;
    padding: 0;
  }

  .main-title {
    margin-left: 0.6em;
  }
}
</style>
