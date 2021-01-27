<template>
    <span>
        <h2 v-if="heading && heading.length > 0">{{ heading }}</h2>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-nav>
    </span>
</template>

<script>
    export default {
        name: "Breadcrumb",
        props: ['heading'],
        data() {
            return {
                items: []
            }
        },
        methods: {
            getUrl(path, sub, index) {
                var pathToGo = '/' + path.split(sub)[0] + sub
                return pathToGo
            }
        },
        mounted() {
            let path = this.$route.path.substr(1)
            let rawPath = path.split('/')

            for (var pName in this.$route.params) {
                if (rawPath.includes(this.$route.params[pName])) {
                    rawPath = rawPath.filter(x => x !== this.$route.params[pName])
                }
            }
            rawPath.map((sub, index) => {
                this.items.push({
                    text: this.sub,
                    to: this.getUrl(path, sub, index)
                })
            })
        }
    }
</script>

<style scoped>

</style>
