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
        float: left;
        margin-left: 100px;
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
    .title-font{
        color: black;
    }
    .title-font2{
        color: white;
    }
    .base-info-name {
        float: left;
        width: 20%;
    }
    .base-info-value {
        float: left;
        width: 80%;
    }
    .task-info-name{
        display: inline-block;
        width: 30%;
    }
    .task-info-value {
        display: inline-block;
        width: 70%;
    }
    .create-button{
        float: left;
        margin-top:16px;
        margin-left:25px;
    }
</style>
<template>
    <div id="nac" class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
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
            <Button class="create-button" type="primary" shape="circle" @click="modal1 = true"> Create Job </Button>
                <Modal
                    v-model="modal1"
                    title="Create A Skill test job"
                    ok-text='Create'
                    cancel-text='Cancle'
                    @on-ok="createok"
                    @on-cancel="createcancle">
                    <div class="task-info-name">Skill Id:</div> <Input v-model="inputskillid" placeholder="your skill id" style="width: 280px"></Input>
                    <br>
                    <div class="task-info-name">Test Days:</div><Input v-model="testDays" placeholder="Test days" style="width: 100px"></Input>
                    <br>
                    <div class="task-info-name">TimePerDay:</div><Input v-model="testTimesPerDay" placeholder="Test times per day" style="width: 100px"></Input>
                </Modal>
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
                    <div class="info-board" v-if="infoboard">
                        <p class="info-first-title"> Information Board </p>
                        <br>
                        <div>
                            <Collapse >
                                <Panel name="1">
                                    BaseInformation
                                    <div class="base-info" slot="content"><div class="base-info-name">JobId:</div><div class="base-info-value">{{info.Base.JobId}}</div></div>
                                    <div class="base-info" slot="content"><div class="base-info-name">SkillId:</div><div class="base-info-value">{{info.Base.SkillId}}</div></div>
                                    <div class="base-info" slot="content"><div class="base-info-name">SkillName:</div><div class="base-info-value">{{info.Base.SkillName}}</div></div>
                                    <div class="base-info" slot="content"><div class="base-info-name">Status:</div><div class="base-info-value">{{info.Base.Status}}</div></div>
                                    <div class="base-info" slot="content"><div class="base-info-name">Locale:</div><div class="base-info-value">{{info.Base.Locale}}</div></div>
                                    <div class="base-info" slot="content"><div class="base-info-name">CreateTime:</div><div class="base-info-value">{{info.Base.CreateTime}}</div></div>
                                </Panel>
                            </Collapse>
                        </div>
                        <br>
                        <div>
                            <Collapse >
                                <Panel name="2">
                                    TimedTaskInformation
                                    <div class="base-info" slot="content"><div class="task-info-name">TestDays:</div><div class="task-info-value">{{info.Task.TestDays}}</div></div>
                                    <div class="base-info" slot="content"><div class="task-info-name">TestTimesPerDay:</div><div class="task-info-value">{{info.Task.TestTimesPerDay}}</div></div>
                                    <div class="base-info" slot="content"><div class="task-info-name">FinishTestTimes:</div><div class="task-info-value">{{info.Task.FinishTestTimes}}</div></div>
                                    <div class="base-info" slot="content"><div class="task-info-name">LastUpdateTime:</div><div class="task-info-value">{{info.Task.LastUpdateTime}}</div></div>
                                    <div slot="content">
                                        <Collapse >
                                            <Panel name="2-1">
                                                Test Patterns
                                                <p slot="content">
                                                <ul id="example">
                                                    <li v-for="item in info.Task.Patterns">
                                                         {{ item }}
                                                    </li>
                                                </ul>
                                                </p>
                                            </Panel>
                                        </Collapse>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                        <br>
                        <br>
                            <p class="info-second-title"> Under Trigger Result: </p>
                            <div>
                                <trigger-table :data9=triData ></trigger-table>
                            </div>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
    import util from '../libs/util';
    import Vue from 'vue';
    import triggerResult from './triggerResultTable.vue'
    import mainTable from './mainTable.vue'
    Vue.component('my-table', mainTable);
    Vue.component('trigger-table', triggerResult);
    export default {
        data() {
            return{
                modal1: false,
                inputskillid: '',
                testDays: '',
                testTimesPerDay: '',
                lis:true,
                infoboard:false,
                tableData: [],
                triData: [],
                info: {
                    Success: '',
                    Base: {},
                    Task: {},
                    Result: {}
                },
                dic: {}
            }
        },
        created() {
            var list = util.setList(0);
            this.tableData = list;
        },
        methods: {
            createok() {
                var url = '/api/v1/service/certification/skillId='+this.inputskillid+'&testDays='+this.testDays+'&testTimesPerDay='+this.testTimesPerDay;
                util.getRequest(url);
            },
            createcancle() {

            },
            showList() {
                this.lis=true
            },
            closeList() {
                this.lis=false
            },
            active() {
                this.infoboard=false;
                var list = util.setList(0);
                this.tableData = list;
            },
            completed() {
                this.infoboard=false;
                var list = util.setList(1);
                this.tableData = list;
            },
            cancled() {
                this.infoboard=false;
                var list = util.setList(2);
                this.tableData = list;
            },
            clickRow(data) {
                this.infoboard = true;
                if(this.dic.hasOwnProperty(data.JobId)){
                    this.info = this.dic[data.JobId];
                    this.triData = this.dic[data.JobId].Result.StabilityResults;
                } else {
                    util.getInfo(data.JobId).then((d) => {
                        this.info = d.body;
                        this.triData = d.body.Result.StabilityResults;
                        Vue.set(this.dic, data.JobId, d.body);
                    });
                }

            }
        }
    }
    
</script>