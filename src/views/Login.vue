<template>
  <!--登录表单的容器-->
  <div class="login_container">
    <div class="title">
      <span>疲劳驾驶监控中心</span>
    </div>
    <!--登录区域-->
    <div class="login_box" style="margin-top: 50px">
      <!--头像-->
      <div class="avatar_box">
        <img src="../assets/img/img_1.png">
      </div>
      <!--表单-->
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label- width="0px" class="login_form">
        <el-form-item prop="admin">
          <el-input v-model="loginForm.admin" placeholder="请输入管理用户名" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入登录密码" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item prop="verifyCode">
          <div class="verifyCode_box">
            <el-input v-model="loginForm.verifyCode" placeholder="请输入计算结果" prefix-icon="el-icon-mobile" class="verifyCode"></el-input>
            <img src="../assets/img/mskKPg.png" alt="" class="verifyCode_img">
          </div>
        </el-form-item>
        <el-form-item class="login_btn">
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { adminLogin } from '@/api/admin'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        admin: '',
        password: '',
        verifyCode: ''
      },
      loginRules: {
        admin: [
          { required: true, message: '请输入管理用户名', trigger: 'blur' },
          { min: 1, max: 12, message: '请输入1-12位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '请输入计算结果', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (loginForm) {
      // eslint-disable-next-line no-unused-expressions
      this.$refs[loginForm].validate(valid => {
        if (!valid) {
          this.$message({
            message: '请完整输入',
            type: 'warning',
            duration: 1200
          })
          return false
        }
      })
      this.getadminLogin()
      // 获取admin的信息
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    async getadminLogin () {
      // eslint-disable-next-line no-unused-vars
      const { data } = await adminLogin(this.loginForm.admin, this.loginForm.password)
      console.log(data)
      // eslint-disable-next-line no-undef
      this.$store.commit('getToken', data.data.token)
      this.$store.commit('getData', data.data.shop)
      console.log(this.$store.state.token)
      console.log(this.$store.state.data)
      if (data.code === 4001) {
        this.$message({
          message: '本管理员用户名不存在',
          type: 'warning',
          duration: 2000
        })
      } else if (data.code === 4002) {
        this.$message({
          message: '管理员用户名对应密码错误',
          type: 'warning',
          duration: 2000
        })
      } else if (data.code === 20000) {
        this.$message({
          message: '登录成功',
          type: 'success',
          duration: 2000,
          onClose: () => {
            this.$router.push('/main')
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>

.title {
  color: dimgray;
  -webkit-text-stroke: 1px black;
  letter-spacing: 0.04em;
  background-color: #708090;
  font-size: 50px;
  font-weight: bold;
  text-shadow: 1px -1px black, 2px -2px white;
  text-align: center;
}

.login_container {
  height: 100%;
  background-color: #708090;
}

.login_box {
  width: 450px;
  height: 380px;
  background-color: #FFFFFF;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box{
    width: 130px;
    height: 130px;
    border: 1px solid #EEEEEE;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: -65px auto;
    background-color: #FFFFFF;

    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #EEEEEE;
    }
  }

  .login_form{
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;

    .login_btn{
      display: flex;
      justify-content: flex-end;
    }

    .verifyCode_box{
      display: flex;
      .verifyCode{
        width: 70%;
        justify-content: left;
      }

      .verifyCode_img{
        width: 30%;
        height: 45px;
        justify-content: flex-end;
      }
    }
  }
}
</style>
