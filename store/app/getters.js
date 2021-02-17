const getters = {
  getLessonsByIndex(state) {
    const idx = state.currentPage
    return state.lessonPages[idx - 1]
  },
  getAllLessons(state) {
    return state.lessons
  },
  getCurrentPage(state) {
    return state.currentPage
  },
  getTotalLessons(state) {
    return state.totalLessons
  },
  getTotalPages(state) {
    return state.lessonPages.length
  },
  getlessonPages(state) {
    return state.lessonPages
  },
}

export default getters
