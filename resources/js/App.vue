<template>
    <div id="app-container" :class="getMenuType">
        <top-nav></top-nav>
        <side-bar></side-bar>
        <main>
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </main>

    </div>
</template>

<script>
    import TopNav from "./containers/TopNav";
    export default {
        name: "App",
        components: {
            TopNav
        }

    }
</script>

<style scoped>

</style>
