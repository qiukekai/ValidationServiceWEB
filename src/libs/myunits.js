import Vue from 'vue';


let comp = {

};

comp.MyComponent = Vue.extend({  
        template: '<Table highlight-row :columns="columns1" @on-row-click="clickHandler"  :data="listD" ></Table>',
        methods: {
            clickHandler: function(data){
                this.$emit('clickonerow', data);
            }
        },
        props: {
            listD: {
                type: Array,
                default() {
                    return [{
                        JobId: 'example',
                        SkillName: 'skill1',
                        Status: 0,
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
                        className: 'status-column'
                    },
                    {
                        title: 'FinishTime',
                        key: 'FinishTime'
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