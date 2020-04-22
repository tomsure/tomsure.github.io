<template>
    <div>
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="首页" name="first">首页</el-tab-pane>
    <el-tab-pane label="关于我们" name="second">关于我们</el-tab-pane>
    <el-tab-pane label="解决方案" name="third">解决方案</el-tab-pane>
    <el-tab-pane label="应用案例" name="four">应用案例</el-tab-pane>
    <el-tab-pane label="服务支持" name="five">服务支持</el-tab-pane>
    <el-tab-pane label="联系我们" name="six">联系我们</el-tab-pane>
    </el-tabs>
    </div>
</template>

<<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab.name);
         if(tab.name=='first'){
          this.$router.push('/a')
         } 
      }
    }
  };
</script>
