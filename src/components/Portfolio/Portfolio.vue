<template>
    <div>
        <PortfolioItem 
            :title="items[0].title"
            :techs="items[0].techs"
            :description="items[0].description"
            :github="items[0].github"
            :demo="items[0].demo"
        />
        <PortfolioItem 
            :title="items[1].title"
            :techs="items[1].techs"
            :description="items[1].description"
            :github="items[1].github"
            :demo="items[1].demo"
            class="reverse"
        />
        <PortfolioItem 
            :title="items[2].title"
            :techs="items[2].techs"
            :description="items[2].description"
            :github="items[2].github"
            :demo="items[2].demo"
        />
        <PortfolioItem 
            :title="items[3].title"
            :techs="items[3].techs"
            :description="items[3].description"
            :github="items[3].github"
            :demo="items[3].demo"
            class="reverse"
        />
        <PortfolioItem 
            :title="items[4].title"
            :techs="items[4].techs"
            :description="items[4].description"
            :github="items[4].github"
            :demo="items[4].demo"
        />        
    </div>
</template>

<script>
import PortfolioItem from './PortfolioItem';

export default {
    name: 'Portfolio',
    components: {
        PortfolioItem
    },
    data() {
        return {
            items: [
                {
                    title: 'weatherUP',
                    techs: ['Vue.js', 'Node/Express', 'OpenWeatherMap API', 'Axios', 'Moment.js', 'SCSS', 'Vue Router'],
                    description: 'This web application utilizes OpenWeatherMap\'s API to show the weather for an inputed location. Other features include: dynamic icons based on the weather, the location\'s time, and a dynamic background color depending on the sunset/sunrise of the location. The backend is built with Node/Express and uses node-fetch to make the API call. Axios is used on the Vue front end to communicate this call. Vue Router is used to allow navigation between the input, result, and not found routes.',
                    github: 'https://github.com/reaganclayton/weatherUP',
                    demo: 'https://weather-up-fullstack.herokuapp.com/'
                },
                {
                    title: 'BestConnect',
                    techs: ['Vue.js', 'Javascript', 'SCSS', 'Photoshop', 'Figma'],
                    description: 'BestConnect is a landing page for a mock ISP company that I came up with. This web app is built using Vue and utilizes its components and form validation. The design was created in Figma and was implemented using Photoshop.',
                    github: 'https://github.com/reaganclayton/BestConnect',
                    demo: 'https://jolly-poitras-00d5ec.netlify.app/'
                },
                {
                    title: 'Portfolio Website',
                    techs: ['Vue.js', 'Vue Router', 'SCSS', 'Figma', 'Photoshop'],
                    description: 'The website you are on right now! This web application is built with Vue.js and utilizes Vue\'s reusable components, props, form validation, and more. Vue Router is also used for the contact success message and a not found page. Go ahead and try it out! The design is inspired by the common "dark theme" style, and I used a blue accent to make it pop. Figma was used for design and Photoshop was used to implement the design.',
                    github: 'https://github.com/reaganclayton/MyPortfolio',
                    demo: 'https://reaganclayton.com'
                },
                {
                    title: 'The Modern Age',
                    techs: ['HTML5', 'Bootstrap', 'Javascript'],
                    description: 'This web app is an ecommerce shopping cart that enables users to add, update, and delete items from a cart. The logic of the application is powered by Javascript, while the front end is built with Bootstrap and very little inline CSS.',
                    github: 'https://github.com/reaganclayton/TheModernAge',
                    demo: 'https://compassionate-mcnulty-6e3e71.netlify.app/'
                },
                {
                    title: 'snakegame',
                    techs: ['HTML5', 'CSS3', 'Javascript'],
                    description: 'Essentially a clone of the popular game "Snake," this project\'s logic was built entirely with plain Javascript. The design and logo are original and were created in Photoshop.',
                    github: 'https://github.com/reaganclayton/snakegame',
                    demo: 'https://eager-archimedes-956782.netlify.app/'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>