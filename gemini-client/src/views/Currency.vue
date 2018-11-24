<template>
    <el-row>
        <sub-header></sub-header>
        <el-col span="24">
            <el-card class="box-card box-card-wrapper">
                <div slot="header">
                    <span>New Currency Added</span>
                </div>

                <el-row class="row-wrapper">
                    <el-col : span="12">
                        <span> new currency name </span>
                    </el-col>
                    <el-col : span="12">
                        <el-input clearable="" placeholder="New Name ..." v-model="request.name"></el-input>
                    </el-col>
                </el-row>

                <el-row class="row-wrapper">
                    <el-col : span="12">
                        <span> new currency symbol </span>
                    </el-col>
                    <el-col : span="12">
                        <el-input clearable="" placeholder="New Symbol ..." v-model="request.symbol"></el-input>
                    </el-col>
                </el-row>

                <el-row class="row-wrapper">
                    <el-col span="24">
                        <el-button @click="AddCurrency" type="success">Add</el-button>

                    </el-col>
                </el-row>
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
    import SubHeader from "../components/SubHeader";
    import axios from 'axios';

    / * eslint-disable no-console * /;

    export default {
        name: "Currency",
        components: {SubHeader},
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
                this.request.name = undefined;
                this.request.symbol = undefined;
                console.info(this.currencies);
            },
            addCurrency: async function () {
                await axios.post('http://localhost:8080/', this.request);
                await this.refresh();
                this.$message({
                    showClose: true,
                    message: 'Add Currency Success!',
                    type: 'success'
                })
            },
            deleteCurrency: async function (id) {
                await axios.delete('http://localhost:8080/' + id);
                await this.refresh();
                this.$message({
                    showClose: true,
                    message: 'Delete Currency Success!',
                    type: 'success'
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/base";

</style>
