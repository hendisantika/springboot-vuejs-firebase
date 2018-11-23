<template>
    <el-row>
        <el-col : span="24">
            <el-card class="box-card">
                <div class="clearfix" slot="header">
                    <span> virtual currency List </span>
                </div>
                <el-table : data="currencies" style="width: 100%">
                    <el-table-column label="currency ID" prop="Id" width="300"/>
                    <el-table-column label=" currency name " prop="name " width=" 300 "/>
                    <el-table-column label="currency units" prop="Symbol" width="300"/>
                    <el-table-column label="quantity" prop="Amount" width="300"/>

                </el-table>
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
