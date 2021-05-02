<template>
    <section class="nav">
        <Chevron />
        <div class="nav-logo-lg">
            <img src="../assets/Portfolio Website.png" alt="Reagan Clayton">
        </div>
        <div class="nav-logo">
            <p>
                <span>R</span>C
            </p>
        </div>
    </section>
</template>

<script>
import Chevron from './Chevron'

export default {
    name: "Nav",
    components: {
        Chevron
    }
}
</script>

<style lang="scss">
.nav {
    position: absolute;
    &-logo {
        text-transform: uppercase;
        font-size: 3.5em;
        padding: 10px 15px;

        span {
            font-family: 'Raleway';
            color: #fff;
            font-weight: 100;
        }

        p {
            font-family: 'Roboto';
            color: $blue;
            font-weight: 300;
            
        }
    }
    &-logo-lg { display: none; }
}

@media (min-width: 768px) {
    .nav {
        &-logo {
            display: none;
        }
        &-logo-lg {
            display: inline;
            background-repeat: no-repeat;
    
            img {
                padding: 25px;
                width: 250px;
            }
        }
    }
}

@media (min-width: 996px) {
    .nav {
        &-logo-lg {
            img { width: 300px; }
        }
    }
}
</style>