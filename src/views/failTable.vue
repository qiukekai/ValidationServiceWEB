<style scoped>
    .task-info-name-1{
        display: inline-block;
        width: 30%;
    }
    .task-info-value-1 {
        display: inline-block;
        width: 70%;
    }
</style>
</style>
<template>
    <div>
        <ul id="example9">
            <li v-for="item in row">
                <div class="task-info-name-1">{{item.FailureTime}}</div><div class="task-info-value-1">{{item.FailReason}}</div>
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