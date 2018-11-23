<template>
    <el-row>
        <el-col span="24">
            <el-card class="box-card">
                <el-col : span="8">
                    <el-input clearable="" placeholder="New Name ..." v-model="request.name"></el-input>
                </el-col>

                <el-col : span="8">
                    <el-input clearable="" placeholder="New Symbol ..." v-model="request.symbol"></el-input>
                </el-col>

                <el-col span="8">
                    <el-button @click="AddCurrency" type="success">Add</el-button>

                </el-col>
            </el-card>
        </el-col>

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
                    <el-table-column align="left" label="Ops" prop="operation" width="200">
                        <template slot-scope="scope">
                            <el-button
                                    @click="deleteCurrency(scope.row.id)"
                                    size="Mini"
                                    type="Danger"> x
                            </el-button>
                        </template>
                    </el-table-column>

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
                request: {
                    name: undefined,
                    symbol: undefined
                },
                currencies: []
            }
        },
        created: async function () {
            await this.refresh()
        },
        methods: {
            refresh: async function () {
                const res = await axios.get('http://localhost:8080/');
                this.currencies = res.data.currencies;
                console.info(this.currencies)
            },
            addCurrency: async function () {
                await axios.post('http://localhost:8080/', this.request);
                await this.refresh()
            },
            deleteCurrency: async function (id) {
                await axios.delete('http://localhost:8080/' + id);
                await this.refresh()
            },
        }
    }
</script>

<style scoped>

</style>
