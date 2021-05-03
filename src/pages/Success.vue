<template>
    <div>
        <h1>Thanks for getting in touch</h1>
        <p>I will get back with you as soon as I can!</p>
        <router-link to="/">
            <button class="btn">
                <span><i class="fa fa-angle-left"></i></span> Go back
            </button>
        </router-link>            
    </div>
</template>

<script>
export default {
    name: 'Success'
}
</script>

<style lang="scss" scoped>
div {
    background: $gray;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-family: 'Raleway';
        text-transform: uppercase;
        color: $blue;
    }
    p {
        font-family: 'Roboto';
        color: #fff;
        margin: .5em 0 3em;
    }
}
</style>