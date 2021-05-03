<template>
    <div>
        <h1>That page doesn't exist</h1>
        <p>Press the button below to return to safety!</p>
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
        font-size: 3em;
        font-family: 'Raleway';
        text-transform: uppercase;
        color: $blue;
    }
    p {
        font-family: 'Roboto';
        font-size: 1.5em;
        font-weight: 300;
        color: #fff;
        margin: .5em 0 3em;
    }
}
</style>