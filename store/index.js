import Vuex from 'vuex'

const makeStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: {}
    },
    mutations: {
      updatePosts (state, { posts }) {
        state.posts = posts
      },
      updatePost (state, { post }) {
        state.post = post
      }
    },
    actions: {
      getPostWithSlug ({commit, state}, slug) {
        let post = state.posts.find((post) => {
          return (post.slug === slug)
        })
        commit('updatePost', { post: post })
      },
      getPosts ({commit}) {
        commit('updatePosts', { posts: [
          {
            id: 1,
            slug: 'hello-static-blogging',
            title: 'Hello Static Blogging',
            created_at: '06/27/2017',
            meta: {
              id: 1,
              name: 'Hello Static Blogging',
              content: 'Hello Static Blogging'
            }
          },
          {
            id: 2,
            slug: 'foo-bar',
            title: 'Foo Bar',
            created_at: '10/18/2016',
            meta: {
              id: 2,
              name: 'Foo Bar',
              content: 'Foo Bar'
            }
          }
        ]})
      }
    }
  })
}

export default makeStore
