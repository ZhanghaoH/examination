<template>
  <div class="container" id="register">
    <div class="form-groups">
      <div class="form-cell">
        <i class="icon-mobile"></i>
        <input v-model="mobile" type="text" placeholder="请输入手机号" />
      </div>
      <div class="form-cell-code">
        <i class="icon-code"></i>
        <input v-model="code" type="text" placeholder="请输入验证码" />
        <button class="btn btn-main" v-if="canGetCode" @click="getCode">获取验证码</button>
        <button class="btn btn-grey" v-if="!canGetCode" disabled>{{ timeCount }}s后再获取</button>
      </div>
      <div class="form-cell">
        <i class="icon-pwd"></i>
        <input v-model="pwd" type="password" placeholder="请输入密码" />
      </div>
      <div class="form-cell">
        <i class="icon-pwd"></i>
        <input v-model="pwdCheck" type="passwordCheck" placeholder="请再次确认密码" />
      </div>
    </div>
    <div class="btn-wr">
      <button class="btn btn-main">{{actionTxt}}</button>
    </div>
  </div>
</template>

<script>
const TIME_ALL = 60
export default {
  props: {
    action: {
      type: String,
      default: 'register'
    }
  },
  data () {
    return {
      mobile: '',
      pwd: '',
      pwdCheck: '',
      code: '',
      canGetCode: true,
      timeCount: TIME_ALL,
      timer: null
    }
  },
  computed: {
    actionTxt () {
      return this.action === 'reset' ? "重置密码" : "注册"
    }
  },
  created () {
    console.log(this.action);

  },
  destroyed () {
    clearInterval(this.timer)
  },
  methods: {
    getCode () {
      clearInterval(this.timer)
      this.canGetCode = false
      let timeCount = setInterval(() => {
        this.timeCount--
        if (this.timeCount === 0) {
          this.canGetCode = true
          this.timeCount = TIME_ALL
          clearInterval(this.timer)
        }
      }, 1000)
    }
  },
}
</script>

<style lang="less" scoped>
@import '../../base/app';
.container {
  padding: 35px 25px 0;
  .form-groups {
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
        background-size: 100% 100%;
        background-repeat: no-repeat;
        &.icon-mobile {
          .bg-image('../../resources/mobile');
        }
        &.icon-pwd {
          .bg-image('../../resources/pwd');
        }
        &.icon-code {
          top: 16px;
          width: 15.5px;
          height: 12.5px;
          .bg-image('../../resources/code');
        }
      }
      &:first-child {
        margin-top: 0;
      }
    }
    .form-cell-code {
      display: flex;
      position: relative;
      margin-top: 20px;
      i {
        position: absolute;
        left: 20px;
        top: 16px;
        width: 15.5px;
        height: 12.5px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        &.icon-code {
          top: 16px;
          width: 15.5px;
          height: 12.5px;
          .bg-image('../../resources/code');
        }
      }
      .btn {
        flex: none;
        font-size: 15px;
        width: 110px;
        margin-left: 15px;
      }
      input {
        width: 100%;
        font-size: 15px;
        padding-left: 54px;
        padding-right: 25px;
        border: 1px solid @border-color;
        .border-radius(22.5px);
      }
    }
  }
  .btn-wr {
    margin-top: 35px;
  }
}
</style>
