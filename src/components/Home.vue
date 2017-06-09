<template>
    <block :content="content"></block>
</template>

<script type="text/babel">
    import Block from './renderers/Block.vue'

    export default {
        components: {
            Block
        },
        data() {
            return {
                content: ''
            }
        },
        created() {
            this.content = require(`../api/blocks/1.html`)
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .block {
        padding: 4em;
    }
</style>