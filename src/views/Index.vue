<template>
    <div class="index">
        <!--回到顶部按钮-->
        <!--注意 要放到div 第一位-->
        <el-backtop/>

        <el-container>
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu  :default-openeds="['1']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>项目一览</template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">简历</el-menu-item>
                            <el-menu-item index="1-2">商城</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>联 系 我</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">邮箱</el-menu-item>
                            <el-menu-item index="2-2">github</el-menu-item>
                            <el-menu-item index="2-3">csdn</el-menu-item>
                            <el-menu-item index="2-4">博客园</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-message"></i>技术介绍</template>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-message"></i>工作历程</template>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>联 系 我</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">邮箱</el-menu-item>
                            <el-menu-item index="2-2">github</el-menu-item>
                            <el-menu-item index="2-3">csdn</el-menu-item>
                            <el-menu-item index="2-4">博客园</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>联 系 我</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">邮箱</el-menu-item>
                            <el-menu-item index="2-2">github</el-menu-item>
                            <el-menu-item index="2-3">csdn</el-menu-item>
                            <el-menu-item index="2-4">博客园</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>联 系 我</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">邮箱</el-menu-item>
                            <el-menu-item index="2-2">github</el-menu-item>
                            <el-menu-item index="2-3">csdn</el-menu-item>
                            <el-menu-item index="2-4">博客园</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
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
