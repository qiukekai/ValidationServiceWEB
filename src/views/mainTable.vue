<style>
    .ivu-table td.active-status-column{
        background-color: greenyellow;
        color: black;
        text-align: center;
    }
    .ivu-table td.completed-status-column{
        background-color: greenyellow;
        color: black;
        text-align: center;
    }
    .ivu-table td.cancled-status-column{
        background-color: greenyellow;
        color: black;
        text-align: center;
    }
    .ivu-table td.finish-time{
        text-align: center;
    }
</style>
<template>
    <Table highlight-row :columns="columns1" @on-row-click="clickHandler"  :data="listD" ></Table>
</template>
<script>
    export default {
        methods: {
            clickHandler: function(data){
                this.$emit('clickonerow', data);
            },
            remove(index) {
                console.info(index)
                this.listD.splice(index, 1);
            }
        },
        props: {
            listD: {
                type: Array,
                default() {
                    return [{
                        JobId: 'example',
                        SkillName: 'skill1',
                        Status: 'completed',
                        FinishTime: 1,
                        Operation: '???'
                    }]
                }
            }
        },
        data() {
            return {
                columns1: [
                    {
                        title: 'JobId',
                        key: 'JobId',
                        ellipsis: true
                    },
                    {
                        title: 'SkillName',
                        key: 'SkillName',
                        ellipsis: true
                    },
                    {
                        title: 'Status',
                        key: 'Status',
                        className: 'active-status-column'
                    },
                    {
                        title: 'FinishTime',
                        key: 'FinishTime',
                        className: 'finish-time'
                    },
                    {
                        title: 'Operation',
                        key: 'Operation',
                        render: (h, params) => {
                             if(this.listD[0].Status == 'Active'){
                                 return h('div', [
                                    h('Button', {
                                        props: {
                                            type: 'error',
                                            size: 'small'
                                        },
                                        on: {
                                            click: () => {
                                                var da = this.listD[params.index].JobId;
                                                console.info(da);
                                                this.listD.splice(params.index, 1);
                                                //emit home el
                                            }
                                        }
                                    }, 'Cancle')
                                ]);
                             }
                             if(this.listD[0].Status == 'Cancled'){
                                 return h('div', [
                                    h('Button', {
                                        props: {
                                            type: 'normal',
                                            size: 'small'
                                        },
                                        on: {
                                            click: ()=> {
                                                this.listD.splice(params.index, 1);
                                            }
                                        }
                                    }, 'ReActive')
                                ]);
                             }
                        }
                    }
                ]
            }
        }
    }
</script>