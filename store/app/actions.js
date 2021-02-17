const actions = {
  setLessons({ dispatch, commit }, data) {
    // data = testData // NOTE MIKE : delete this line and the api at the bottom
    // NOTE remove all duplicate lessons which avoids Vue warns duplicate keys this may cause update errors. Which it does
    data = [...new Map(data.map((item) => [item.title, item])).values()]

    dispatch('setTotalLessons', data)
    commit('setLessons', data)
    dispatch('setLessonPages', [...data])
  },
  setLessonPages({ commit }, data) {
    const lessonItemsPerPage = 20
    const result = new Array(Math.ceil(data.length / lessonItemsPerPage))
      .fill()
      .map(() => data.splice(0, lessonItemsPerPage))
    commit('setLessonPages', result)
  },
  setTotalLessons({ commit }, data) {
    commit('setTotalLessons', data.length)
  },
}

export default actions
