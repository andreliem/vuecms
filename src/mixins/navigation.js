export default {
    methods: {
        navPost(post) {
            this.$router.push({ name: 'Post', params: { id: post.id}})
        },
        navPosts() {
            this.$router.push({ name: 'Posts'})
        }
    }
}