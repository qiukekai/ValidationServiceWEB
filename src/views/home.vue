<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-content{
        min-height: 1000px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .info-board{
        margin: 0 auto;
        padding: 10px;
    }
    .info-first-title{
         color: black;
         font-weight:300;
         font-size: 20pt;
    }
    .info-second-title{
         color: black;
         font-weight:300;
         font-size: 16pt;
    }
    .base-info{
         color: black;
         font-weight:100;
         font-size: 12pt;
    }
    .tast-info{
         color: black;
         font-size: 14pt;
    }
    .title-font{
        color: black;
    }
    .title-font2{
        color: white;
    }
</style>
<template>
    <div id="nac" class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">
                AdminTool
            </div>
            <div class="layout-nav">
                <Menu-item name="1"type="text">
                    <Icon type="ios-navigate"></Icon>
                    <a class="title-font2" @click="showList" > SkillList </a>
                </Menu-item>
                <Menu-item name="2" type="text">
                    <Icon type="ios-keypad"></Icon>
                    <a class="title-font2"  @click="closeList"> Charts </a>
                </Menu-item>
            </div>
        </Menu>
         <Menu mode="horizontal" active-name="1" v-if="lis">
            <div class="layout-assistant">
                <Menu-item name="1">
                    <a class="title-font" @click="active"> Active </a>
                    </Menu-item>
                <Menu-item name="2"> <a class="title-font" @click="completed"> Completed </a></Menu-item>
                <Menu-item name="3"> <a class="title-font" @click="cancled"> Cancled </a></Menu-item>
            </div>
        </Menu> 
        <div class="layout-content">
            <div v-if="lis">
                <Row>
                    <Col span="12">
                    <div class="info-board">
                        <my-table v-on:clickonerow="clickRow" :listD=tableData > </my-table>
                    </div>
                    </Col>

                    <Col span="12">
                    <div class="info-board">
                        <p class="info-first-title"> Information Board </p>
                        <hr SIZE=15>
                        <br>
                        <div> 
                            <p class="base-info">JobId: {{info.Base.JobId}} </p>
                            <p class="base-info">SkillId: {{info.Base.SkillId}} </p>
                            <p class="base-info">SkillName: {{info.Base.SkillName}} </p>
                            <p class="base-info">JobId: {{info.Base.JobId}} </p>
                            <p class="base-info">Status: {{info.Base.Status}} </p>
                            <p class="base-info">Locale: {{info.Base.Locale}} </p>
                            <p class="base-info">CreateTime: {{info.Base.CreateTime}} </p>
                        </div>
                        <br>
                        <hr SIZE=15>
                        <br>
                        <div> 
                            <p class="tast-info">TestDays: {{info.Task.TestDays}} </p>
                            <p class="tast-info">TestTimesPerDay: {{info.Task.TestTimesPerDay}} </p>
                            <p class="tast-info">FinishTestTimes: {{info.Task.FinishTestTimes}} </p>
                            <p class="tast-info">LastUpdateTime: {{info.Task.LastUpdateTime}} </p>
                            <p class="tast-info">Patterns: </p>
                            <ul id="example-1">
                                <li v-for="item in info.Task.Patterns">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                        <br>
                        <hr SIZE=15>
                        <br>
                            <p class="info-second-title"> Under Trigger Result: </p>
                            <div>
                                <ul id="example-1">
                                    <li v-for="item in info.Result.StabilityResults">
                                       <p class="tast-info">Utterance: {{ item.Utterance }} </p>
                                       <p class="tast-info">TestTimes: {{ item.TestTimes }} </p>
                                       <p class="tast-info">PassRate: {{ item.PassRate }} </p>
                                        <Collapse class="tast-info" v-if="item.PassRate != '1'">
                                            <Panel name="1">
                                                FailureRecords
                                                <p slot="content">
                                                    <ul id="example-1">
                                                        <li v-for="fail in item.FailureDatas">
                                                            <p class="tast-info">FailTime: {{ fail.FailureTime }} </p>
                                                            <p class="tast-info">FailReason: {{ fail.FailReason }} </p>
                                                            <hr style="width:30%">
                                                        </li>
                                                    </ul>
                                                </p>
                                            </Panel>
                                        </Collapse>
                                        <hr style="width:60%">
                                    </li>
                                </ul>
                            </div>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
    import comp from '../libs/myunits';
    import util from '../libs/util';
    import Vue from 'vue';
    Vue.component('my-table', comp.MyComponent);
    export default {
        data() {
            return{
                lis:true,
                tableData: [],
                info: {
                    Success: '',
                    Base: {},
                    Task: {},
                    Result: {}
                }
            }
        },
        created() {
            var list = util.setList(0);
            this.tableData = list;
        },
        methods: {
            showList() {
                this.lis=true
            },
            closeList() {
                this.lis=false
            },
            active() {
                var list = util.setList(0);
                this.tableData = list;
            },
            completed() {
                var list = util.setList(1);
                this.tableData = list;
            },
            cancled() {
                var list = util.setList(2);
                this.tableData = list;
            },
            clickRow(data) {
                console.info("$$$  "+ JSON.stringify(data))
                util.getInfo(data.JobId).then((d) => {
                    console.info(JSON.stringify(d.body));
                    this.info = d.body;
                });
            }
        }
    }
    
</script>