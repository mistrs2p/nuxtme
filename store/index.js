import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: "1",
                title: "First Post",
                previewText: "This is First mYPost",
                thumbnail: "https://www.dti.dk/_/media/73504&w=1460&h=808&r=cover&_filename=73504_Web_tech-mining.jpg"
              },
              {
                id: "2",
                title: "Second Post",
                previewText: "This is Second2 mYPost",
                thumbnail: "https://www.dti.dk/_/media/73504&w=1460&h=808&r=cover&_filename=73504_Web_tech-mining.jpg"
              },
              {
                id: "3",
                title: "Third Post",
                previewText: "This is 3threeee mYPost",
                thumbnail: "https://www.dti.dk/_/media/73504&w=1460&h=808&r=cover&_filename=73504_Web_tech-mining.jpg"
              },
              {
                id: "4",
                title: "Forth4 Post",
                previewText: "This is 4&4 mYPost",
                thumbnail: "https://www.dti.dk/_/media/73504&w=1460&h=808&r=cover&_filename=73504_Web_tech-mining.jpg"
              }
            ])
            resolve()
          }, 1500)
          // reject(new Error)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore