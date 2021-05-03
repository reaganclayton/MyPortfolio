<template>      
    <div class="portfolio-item">
        <img :src="require(`../../assets/${title}.png`)" :alt="title + ' logo'">
        <div class="portfolio-item-info">
            <PortfolioItemTechs :techs="techs" />
            <p>{{ description }}</p>
            <PortfolioItemBtns
                :github="github"
                :demo="demo"
            />            
        </div>
    </div>    
</template>

<script>
import PortfolioItemBtns from './PortfolioItemBtns'
import PortfolioItemTechs from './PortfolioItemTechs'

export default {
    name: "PortfolioItem",
    components: {
        PortfolioItemBtns,
        PortfolioItemTechs
    },
    props: {
        title: String,
        techs: Array,
        description: String,
        github: String,
        demo: String
    }
}
</script>

<style lang="scss">
.portfolio-item {
    display: flex;
    color: #fff;
    padding: 8em 0;
    justify-content: center;
    img {
        align-self: center;
        max-width: 400px;
        padding: 2em;
    }
    &-info {
        max-width: 500px;
        margin: 0 5em;
        background-color: $gray;
        padding: 2em 3em;
        border: 1px solid $border;
        p {
            font-family: 'Roboto';
            font-weight: 300;
            line-height: 1.75;
            padding-bottom: 2em;
        }
    }
}
@media (min-width: 200px) and (max-width: 996px) {
    .portfolio-item {
        flex-direction: column;
        align-items: center;
        padding: 5em 0;
        &-info {
            margin: 0 1em;
        }
    }
}
</style>