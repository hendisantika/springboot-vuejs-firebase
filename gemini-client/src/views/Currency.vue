<template>
    <el-row>
        <sub-header/>
        <el-col :span="24">
            <el-card class="box-card box-card-wrapper">
                <div slot="header">
                    <span>Add new currency</span>
                </div>
                <el-row class="row-wrapper">
                    <el-col :span="12">
                        <span>New currency name</span>
                    </el-col>
                    <el-col :span="12">
                        <el-input
                                clearable
                                placeholder="New Name..."
                                v-model="request.name">
                        </el-input>
                    </el-col>
                </el-row>
                <el-row class="row-wrapper">
                    <el-col :span="12">
                        <span>New currency symbol</span>
                    </el-col>
                    <el-col :span="12">
                        <el-input
                                clearable
                                placeholder="New Symbol..."
                                v-model="request.symbol">
                        </el-input>
                    </el-col>
                </el-row>
                <el-row class="row-wrapper">
                    <el-col :span="24">
                        <el-button
                                @click="addCurrency"
                                type="success">Add To
                        </el-button>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :span="24">
            <el-card class="box-card">
                <div class="clearfix" slot="header">
                    <span>Virtual currency list</span>
                </div>
                <el-table
                        :data="currencies"
                        style="width: 100%">
                    <el-table-column
                            align="left"
                            label="Currency ID"
                            prop="id"
                            width="200"/>
                    <el-table-column
                            align="left"
                            label="Currency Name"
                            prop="name"
                            width="200"/>
                    <el-table-column
                            align="left"
                            label="Currency Symbol"
                            prop="symbol"
                            width="200"/>
                    <el-table-column
                            align="left"
                            label="quantity"
                            prop="amount"
                            width="200"/>
                    <el-table-column
                            align="left"
                            label="Ops"
                            prop="operation"
                            width="200">
                        <template slot-scope="scope">
                            <el-button
                                    @click="deleteCurrency(scope.row.id)"
                                    size="mini"
                                    type="danger">×
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    /* eslint-disable no-console */
    import axios from 'axios'
    import SubHeader from "../components/SubHeader";

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
                this.request.symbol = undefined
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