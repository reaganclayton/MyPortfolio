<template>
    <UserMessages 
        :title="title"
        :message="message"
    />
</template>

<script>
import UserMessages from '../components/UserMessages'

export default {
    name: 'Success',
    components: {
        UserMessages
    },
    data() {
        return {
            title: 'Thanks for getting in touch!',
            message: 'I will get back with you as soon as I can'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>