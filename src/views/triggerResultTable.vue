<template>
    <Table :columns="columns10" :data="data9"></Table>
</template>
<script>
    import expandRow from './failTable.vue';
    export default {
        components: { expandRow },
        props: {
            data9: {
                type: Array,
                default() {
                    return [{
                        Utterance: 'no data',
                        TestTimes: '0',
                        PassRate: '0',
                        FailureDatas: []
                    }]
                }
            }
        },
        data () {
            return {
                columns10: [
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row.FailureDatas
                                }
                            })
                        }
                    },
                    {
                        title: 'Utterance',
                        key: 'Utterance'
                    },
                    {
                        title: 'TestTimes',
                        key: 'TestTimes'
                    },
                    {
                        title: 'PassRate',
                        key: 'PassRate'
                    }
                ]
            }
        }
    }
</script>