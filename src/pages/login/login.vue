<template>
  <div class="container" id="login">
    <div class="logo"></div>
    <div class="form-groups">
      <div class="form-cell">
        <i class="icon-mobile"></i>
        <input v-model="mobile" type="text" placeholder="请输入手机号" />
      </div>
      <div class="form-cell">
        <i class="icon-pwd"></i>
        <input v-model="pwd" type="password" placeholder="请输入密码" />
      </div>
    </div>
    <div class="tips-wr">
      <a href="">忘记密码</a>
      <a href="">立即注册</a>
    </div>
    <div class="btn-wr">
      <button class="btn btn-main">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobile: '',
      pwd: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../base/app';
html,
body {
  background-color: @tab-bg-color;
}
.container {
  padding: 50px 25px 0;
  .logo {
    width: 72px;
    height: 92px;
    .bg-image('../../resources/book');
    background-repeat: no-repeat;
    background-size: 72px 92px;
    margin: 0 auto;
  }
  .form-groups {
    margin-top: 25px;
    .form-cell {
      margin-top: 20px;
      padding-left: 54px;
      padding-right: 25px;
      input {
        // line-height: @cell-height;
        // height: @cell-height;
        font-size: 15px;
        width: 100%;
      }
      i {
        position: absolute;
        left: 20px;
        top: 12.5px;
        width: 15px;
        height: 20px;
        background-size: 15px 20px;
        background-repeat: no-repeat;
        &.icon-mobile {
          .bg-image('../../resources/mobile');
        }
        &.icon-pwd {
          .bg-image('../../resources/pwd');
        }
      }
      &:first-child {
        margin-top: 0;
      }
    }
  }
  .tips-wr {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    a {
      color: @grey-color;
    }
  }
  .btn-wr {
    margin-top: 25px;
  }
}
</style>
