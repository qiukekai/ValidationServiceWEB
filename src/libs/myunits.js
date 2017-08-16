import Vue from 'vue';


let comp = {

};

comp.MyComponent = Vue.extend({  
        template: '<Table width="auto" :columns="columns1" :data="data1" @on-row-click="fn"></Table>',
        props: {
            data1: []
        },
        method: {
            fn(data) {
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
                ],
                data1: [
                    {
                        SkillName: '王小明1',
                        Status: 0,
                        FinishTime: 1,
                        MoreInformation: '...',
                        Operation: '???'
                    },
                    {
                        SkillName: '王小明2',
                        Status: 0,
                        FinishTime: 1,
                        MoreInformation: '...',
                        Operation: '???'
                    },
                    {
                        SkillName: '王小明3',
                        Status: 0,
                        FinishTime: 1,
                        MoreInformation: '...',
                        Operation: '???'
                    },
                    {
                        SkillName: '王小明4',
                        Status: 0,
                        FinishTime: 1,
                        MoreInformation: '...',
                        Operation: '???'
                    }
                ]
            }
        }
    });  
export default comp;