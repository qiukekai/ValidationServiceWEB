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
    .status-column{
         background-color: #2db7f5;
         color: #fff;
    }
</style>
<template>
    <div id="nac" class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Button name="1" @click="showList" type="text">
                    <Icon type="ios-navigate"></Icon>
                    SkillList
                </Button>
                <Button name="2" @click="closeList" type="text">
                    <Icon type="ios-keypad"></Icon>
                    Charts
                </Button>
            </div>
        </Menu>
        <!-- <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name=
                "2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
            </div>
        </Menu> -->
        <div class="layout-content">
            <div v-if="lis">
                <Row>
                    <Col span="12">
                    <my-table></my-table>
                    </Col>
                    <Col span="12">col-12</Col>
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
        created() {
            util.base.get(" ").then(
                function(data) {
                    let arr = [];
                    arr.filter((item) => {
                        return item > 3;
                    });
                    arr.map((item) => {
                        return item * 3;
                    });
                },
                function(error) {

                }
            );
        },
        data() {
            return{
                lis:true
            }
        },
        methods: {
            showList() {
                this.lis=true
            },
            closeList() {
                this.lis=false
            }
        }
    }
    
</script>