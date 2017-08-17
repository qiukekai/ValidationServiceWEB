import Vue from 'vue';


let comp = {

};

comp.MyComponent = Vue.extend({  
        template: '<Table highlight-row :columns="columns1" :data="data1" @on-row-click="fn"></Table>',
        props: {
            data1: []
        },
        method: {
            fn: function(data) {
                console.info(data)
            }
        },
        data() {
            return {
                columns1: [
                    {
                        title: 'SkillName',
                        key: 'SkillName'
                    },
                    {
                        title: 'Status',
                        key: 'Status',
                        className: 'status-column'
                    },
                    {
                        title: 'FinishTime',
                        key: 'FinishTime'
                    },
                    {
                        title: 'MoreInformation',
                        key: 'MoreInformation',
                        render: (h, params) => {
                            return h('div', [
                                h('Button',{
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, [
                                    h('Poptip', {
                                        props: {
                                            title: 'Information',
                                            content: 'CreateTime: 2017/07/10  \r\n  TestDays:3  \r\n  TimesPerDay:2',
                                            size: 'small'
                                        },
                                        on: {
                                            
                                        }
                                    }, 'more')
                                ])
                            ]);
                        }
                    },
                    {
                        title: 'Operation',
                        key: 'Operation',
                         render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    }
                                }, 'Cancle')
                            ]);
                        }
                    }
                ]
            }
        }
    });  
export default comp;