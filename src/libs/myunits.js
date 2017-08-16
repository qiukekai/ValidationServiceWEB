import Vue from 'vue';


let comp = {

};

comp.MyComponent = Vue.extend({  
        template: '<Table width="auto" :columns="columns1" :data="data1"></Table>',
        data() {
            return {
                columns1: [
                    {
                        title: 'SkillName',
                        key: 'SkillName',
                        width: 300,
                        fixed: 'left'
                    },
                    {
                        title: 'Status',
                        key: 'Status',
                        width: 100,
                        fixed: 'left',
                        className: 'status-column'
                    },
                    {
                        title: 'FinishTime',
                        key: 'FinishTime',
                        fixed: 'left'
                    },
                    {
                        title: 'MoreInformation',
                        key: 'MoreInformation',
                        width: 150,
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
                        width: 150,
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