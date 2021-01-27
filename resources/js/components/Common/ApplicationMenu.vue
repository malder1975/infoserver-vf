<template>
    <div :class="{ 'app-menu':true, 'shown' : isOpen}" @mouseenter="isMenuOwer=true" @mouseleave="isMenuOwer=false">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ApplicationMenu"
    }
</script>

<style scoped>

</style>
