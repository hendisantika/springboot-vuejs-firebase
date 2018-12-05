<template>
    <el-button @click="signout" class="signout-Label" type="text"> Signout</el-button>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "SubHeader",
        methods: {
            signout: function () {
                firebase.auth().signOut().then(() => {
                    this.$router.push('/signin')
                })
            }
        }
    }
</script>

<style scoped>

</style>
