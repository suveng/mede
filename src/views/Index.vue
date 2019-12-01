<template>
    <div class="index">
        <!--回到顶部按钮-->
        <!--注意 要放到div 第一位-->
        <el-backtop/>

        <el-container>
            <el-aside>
                <el-row>
                    <el-link>项目一览<i class="el-icon-view el-icon--right"/></el-link>
                </el-row>
                <el-row>
                    <el-link>联 系 我<i class="el-icon-view el-icon--right"/></el-link>
                </el-row>
                <el-row>
                    <el-link>技术介绍<i class="el-icon-view el-icon--right"/></el-link>
                </el-row>
                <el-row>
                    <el-link>工作历程<i class="el-icon-view el-icon--right"/></el-link>
                </el-row>
            </el-aside>

            <el-container>
                <el-main>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                    <el-row>row</el-row>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "index",
        components: {}
    }
</script>

<style scoped>

    .index {
        min-width: 100%;
        min-height: 100%;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 100px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
</style>
