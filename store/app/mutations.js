const mutations = {
  setLessons(state, data) {
    state.lessons = data
  },
  setLessonPages(state, data) {
    state.lessonPages = data
  },
  setTotalLessons(state, data) {
    state.totalLessons = data
  },
  setCurrentPage(state, data) {
    state.currentPage = data
  },
}

export default mutations
