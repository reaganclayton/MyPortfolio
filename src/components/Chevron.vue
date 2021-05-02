<template>
    <div @click="scroll()" class="chevron-wrapper">
        <span class="chevron-up"></span>            
    </div>
</template>

<script>
export default {
    name: 'Chevron',
    methods: {
        scroll: () => {
            const header = document.querySelector('.showcase');
            header.scrollIntoView();
        }
    }
}
</script>

<style lang="scss">
.chevron-wrapper {
    cursor: pointer;
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 4em 5em;
    .chevron-up::before {
        content: '';
        border-style: solid;
        border-width: 0.25em 0.25em 0 0;
        height: 2em;
        width: 2em;
        transform: rotate(-45deg);
        display: inline-block;
    }
}
@media (max-width: 760px) {
    .chevron-wrapper { display: none; }
}
</style>