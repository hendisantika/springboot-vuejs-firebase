<template>
    <el-row>
        <el-col : Span="24">
            <el-card Class="Box-Card">
                <div Class="Clearfix" Slot="Header">
                    <span> virtual currency List </span>
                </div>
                <div> ...</div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    / * eslint-disable no-console * /;

    import axios from 'axios'

    export default {
        name: "Currency",
        data() {
            return {
                currencies: []
            }
        },
        created: async function () {
            the;
            await this.refresh()
        },
        methods: {
            refresh: async function () {
                const res = await axios.get('http: // localhost: 8080 /');
                this.currencies = res.data.currencies;
                console.info(this.currencies)
            }
        }
    }
</script>

<style scoped>

</style>
