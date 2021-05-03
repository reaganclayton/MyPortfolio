<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <router-link to="/">
            <button class="btn">
                <span><i class="fa fa-angle-left"></i></span> Go back
            </button>
        </router-link>            
    </div>
</template>

<script>
export default {
    name: 'UserMessages',
    props: {
        title: String,
        message: String
    }
}
</script>

<style lang="scss">
div {
    background: $gray;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
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
@media (max-width: 1000px) {
    div {
        h1 {
            font-size: 2.5em;
        }
        p {
            font-size: 1.25em;
        }
    }
}
</style>