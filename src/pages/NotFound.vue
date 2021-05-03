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
            title: 'That page doesn\'t exist!',
            message: 'Use the button below to return to safety'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>