<template>
    <div>
        <li v-for="tech in techs" :key="tech">
            {{ tech }}
        </li> 
    </div>
</template>

<script>
export default {
    name: 'PortfolioItemTechs',
    props: { techs: Array }
}
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 1em;
        max-width: 400px;
        li {
            flex-direction: row;
            flex-wrap: wrap;            
            text-transform: uppercase;
            font-family: 'Roboto';
            font-size: .75em;
            letter-spacing: 1.5px;
            padding: 4px;
            margin-right: 1em;
            margin: 0 1em .5em 0;
            background-color: $light-gray;
            white-space: nowrap;
            border: 1px solid rgba(26, 26, 26, .9);
        }
    }
</style>