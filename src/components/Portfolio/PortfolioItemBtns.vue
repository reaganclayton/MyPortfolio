<template>
    <div>
        <button @click="newWindow(github)" class="btn">
            <span><i class="fa fa-code"></i></span>
            Code
        </button>
        <button @click="newWindow(demo)" class="btn">
            <span><i class="fa fa-eye"></i></span>
            Demo
        </button>
    </div>
</template>

<script>
export default {
    name: "PortfolioItemBtns",
    props: {
        github: String,
        demo: String
    },
    methods: {
        newWindow: link => {
            window.open(link);
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    text-align: center;
    button {
        margin: 1em;
    }
}
</style>