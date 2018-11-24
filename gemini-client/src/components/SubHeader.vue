<template>
    <el-button @Click="signout" class="signout-Label" type="text"> Signout</el-button>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "SubHeader",
        methods: {
            signout: function () {
                firebase.Auth().signOut().then(() => {
                    this.$router.push('/ Signin')
                })
            }
        }
    }
</script>

<style scoped>

</style>
