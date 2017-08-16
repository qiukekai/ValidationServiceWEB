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
        margin: 15px, 200px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .status-column{
         background-color: #2db7f5;
         color: #fff;
    }
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav" id="nac">
                <Menu-item name="1" @click="showList()">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2" @click="closeList()">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
            </div>
        </Menu>
        <!-- <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name="2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
            </div>
        </Menu> -->
        <div class="layout-content">
            <Row>
                <Col span="12">
                    <my-table v-if="list"></my-table>
                </Col>
                <Col span="12">col-12</Col>
            </Row>
           
        </div>
    </div>
</template>
<script>
    import comp from '../libs/myunits'
    import Vue from 'vue'

    Vue.component('my-table', comp.MyComponent); 

    export default {
        data() {
            return {
                list:true 
            }
        },
        methods: {
            showList: function() {
                alert("true")
                this.list=true
            },
            closeList: function() {
                alert("false")
                this.list=false
            }
        }
    }
    
</script>