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
                    techs: ['Vue.js', 'Node/Express', 'REST Api', 'Axios', 'SCSS'],
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex sem, elementum vitae neque non, mattis ultricies lacus. Suspendisse placerat et leo at tempor. Fusce ut ultricies felis. Quisque sagittis nulla eu viverra tristique. Nullam lacus sapien, tempus sed aliquet a, venenatis a mi. Mauris fermentum ut mi sit amet vestibulum.',
                    github: 'https://github.com/reaganclayton/weatherUP',
                    demo: 'https://weather-up-fullstack.herokuapp.com/'
                },
                {
                    title: 'BestConnect',
                    techs: ['React.js', 'Javascript', 'SCSS', 'Photoshop', 'Figma'],
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex sem, elementum vitae neque non, mattis ultricies lacus. Suspendisse placerat et leo at tempor. Fusce ut ultricies felis. Quisque sagittis nulla eu viverra tristique. Nullam lacus sapien, tempus sed aliquet a, venenatis a mi. Mauris fermentum ut mi sit amet vestibulum.',
                    github: 'https://github.com/reaganclayton/BestConnect',
                    demo: 'https://jolly-poitras-00d5ec.netlify.app/'
                },
                {
                    title: 'Portfolio Website',
                    techs: ['Vue.js', 'Vuelidate', 'SCSS', 'Photoshop'],
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex sem, elementum vitae neque non, mattis ultricies lacus. Suspendisse placerat et leo at tempor. Fusce ut ultricies felis. Quisque sagittis nulla eu viverra tristique. Nullam lacus sapien, tempus sed aliquet a, venenatis a mi. Mauris fermentum ut mi sit amet vestibulum.',
                    github: 'https://github.com/reaganclayton/MyPortfolio',
                    demo: 'https://reaganclayton.com'
                },
                {
                    title: 'The Modern Age',
                    techs: ['HTML5', 'Bootstrap', 'Vanilla Javascript'],
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex sem, elementum vitae neque non, mattis ultricies lacus. Suspendisse placerat et leo at tempor. Fusce ut ultricies felis. Quisque sagittis nulla eu viverra tristique. Nullam lacus sapien, tempus sed aliquet a, venenatis a mi. Mauris fermentum ut mi sit amet vestibulum.',
                    github: 'https://github.com/reaganclayton/TheModernAge',
                    demo: 'https://compassionate-mcnulty-6e3e71.netlify.app/'
                },
                {
                    title: 'snakegame',
                    techs: ['HTML5', 'CSS3', 'Vanilla Javascript'],
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex sem, elementum vitae neque non, mattis ultricies lacus. Suspendisse placerat et leo at tempor. Fusce ut ultricies felis. Quisque sagittis nulla eu viverra tristique. Nullam lacus sapien, tempus sed aliquet a, venenatis a mi. Mauris fermentum ut mi sit amet vestibulum.',
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