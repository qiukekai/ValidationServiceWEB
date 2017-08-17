<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <ul id="example9">
            <li v-for="item in row">
                <Row class="expand-row" >
                    <Col span="6" >{{item.FailureTime}}</Col>
                    <Col span="18" >{{item.FailReason}}</Col>
                </Row>
            </li>
        </ul>

    </div>
</template>
<script>
    export default {
        props: {
            row: Array
        }
    };
</script>