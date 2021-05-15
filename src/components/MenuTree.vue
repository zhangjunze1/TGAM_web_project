<template>
  <div>
    <template>
      <el-submenu index="/systemManage">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统管理</span>
        </template>
        <!--        <el-menu-item index="/welcome" >-->
        <!--          <i class="el-icon-star-off"></i>-->
        <!--          <span slot="title">控制面板</span>-->
        <!--        </el-menu-item>-->
        <el-menu-item index="/host" >
          <i class="el-icon-s-home"></i>
          <span slot="title">主界面</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/businessManage">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>基础信息</span>
        </template>
        <el-menu-item index="/car">
          <i class="el-icon-truck"></i>
          <span slot="title">车辆</span>
        </el-menu-item>
        <el-menu-item index="/driver">
          <i class="el-icon-user"></i>
          <span slot="title">司机</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/monitor" >
        <template slot="title">
          <i class="el-icon-camera-solid"></i>
          <span>监控中心</span>
        </template>
        <el-menu-item index="/data">
          <i class="el-icon-date"></i>
          <span slot="title">实时数据</span>
        </el-menu-item>
        <el-menu-item index="/record">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">疲劳记录</span>
        </el-menu-item>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuTree'
}
</script>

<style scoped>
/*实现了溢出处理*/
.el-menu--collapse span,
.el-menu--collapse i.el-submenu__icon-arrow {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>
