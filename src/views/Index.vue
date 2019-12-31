<template>
    <div class="index">
        <!--回到顶部按钮-->
        <!--注意 要放到div 第一位-->
        <el-backtop/>

        <el-container>
            <el-aside>
                <el-menu :default-openeds="['1']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i><span class="max-text">项目一览</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><i class="el-icon-message"></i><router-link to="/school" class="link-class">校招</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2"><i class="el-icon-message"></i><router-link to="/mall" class="link-class">商城</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i><span class="max-text">联 系 我</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1"><i class="el-icon-message"></i><span
                                    class="max-text">邮箱</span>
                            </el-menu-item>
                            <el-menu-item index="2-2"><i class="el-icon-message"></i><span
                                    class="max-text">github</span></el-menu-item>
                            <el-menu-item index="2-3"><i class="el-icon-message"></i><span
                                    class="max-text">csdn</span>
                            </el-menu-item>
                            <el-menu-item index="2-4"><i class="el-icon-message"></i><span
                                    class="max-text">博客园</span>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <router-view/>
        </el-container>
    </div>
</template>

<script>
    import Markdown from 'vue-meditor';

    export default {
        name: "index",
        components: {
            Markdown
        },
        data: function () {
            return {
                mdHeight: 1000
            }
        },
        mounted() {
            //设置高度
            this.getMdHeight();
            //监听窗口大小
            const that = this;
            window.onresize = () => {
                return (() => {
                    console.log("改变窗口,自适应");
                    this.getMdHeight();
                })()
            }
        },
        methods: {
            getMdHeight() {
                // console.log(windowHeight);
                this.mdHeight = window.innerHeight - 80;
            },
        },


    }
</script>

<style scoped>
    @import "../assets/css/index.css";
</style>
<style>
    .link-class{
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #303133;
    }
    .link-class:hover{
        text-decoration: none;
        color: #303133;
    }
</style>
