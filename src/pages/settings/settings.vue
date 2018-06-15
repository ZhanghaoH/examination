<template>
  <div id="settings">
    <div class="item-wr">
      <a class="item" href="###">
        <div class="cnt-l">
          <span>修改手机号</span>
        </div>
        <div class="cnt-r">
          <span>18236586295</span>
          <i class="icon-right"></i>
        </div>
      </a>
      <a class="item" href="register.html?action=reset">
        <div class="cnt-l">
          <span>修改密码</span>
        </div>
        <div class="cnt-r">
          <span></span>
          <i class="icon-right"></i>
        </div>
      </a>
      <a class="item" href="">
        <div class="cnt-l">
          <span>修改考试类目</span>
        </div>
        <div class="cnt-r">
          <span>初级会计职称</span>
          <i class="icon-right"></i>
        </div>
      </a>
    </div>
    <div class="item-wr">
      <a class="item">
        <div class="cnt-l">
          <span>字体大小</span>
        </div>
        <div class="cnt-r">
          <!-- <span> -->
          <span class="font-size" :class="{'on': fontSize === 1}" @click="fontSizeSet(1)">
            <small>Aa</small>
          </span>
          <span class="font-size" :class="{'on': fontSize === 2}" @click="fontSizeSet(2)">Aa</span>
          <span class="font-size" :class="{'on': fontSize === 3}" @click="fontSizeSet(3)">
            <big>Aa</big>
          </span>
          <!-- </span> -->
          <!-- <i class="icon-right"></i> -->
        </div>
      </a>
      <a class="item">
        <div class="cnt-l">
          <span>允许4G下播放音频</span>
        </div>
        <div class="cnt-r">
          <my-switch size="lg" color="green" v-model="isPlayAudio" close-name open-name=""></my-switch>
          <!-- <i class="icon-right"></i> -->
        </div>
      </a>
    </div>
    <div class="item-wr">
      <a class="item" @click="showCacheTips(true)">
        <div class="cnt-l">
          <span>清理缓存</span>
        </div>
        <div class="cnt-r">
          <span class="txt__warn">92.3M</span>
          <i class="icon-right"></i>
        </div>
      </a>
      <a class="item" href="feedback.html">
        <div class="cnt-l ">
          <span>意见反馈</span>
        </div>
        <div class="cnt-r ">
          <span></span>
          <i class="icon-right "></i>
        </div>
      </a>
      <a class="item" href="">
        <div class="cnt-l ">
          <span>关于</span>
        </div>
        <div class="cnt-r ">
          <span></span>
          <i class="icon-right "></i>
        </div>
      </a>
    </div>
    <div class="btn-wr">
      <button class="btn-lg btn-warn">退出登录</button>
    </div>
    <exam-dialog :dialogDesc="dialogDesc" :showDialog="isShowCacheTips" :cancelTxt="cancelTxt" @action-confirm="clearCache()" @action-cancel="showCacheTips(false)"></exam-dialog>
  </div>

</template>

<script>
import examDialog from '../../components/examDialog'
import 'babel-polyfill';
import mySwitch from 'vue-switch/switch-2.vue'
export default {
  components: {
    mySwitch, examDialog
  },
  data () {
    return {
      isPlayAudio: false,
      fontSize: 2,
      isShowCacheTips: false,
      dialogDesc: '确认清理缓存',
      cancelTxt: '取消'
    }
  },
  watch: {
    isPlayAudio () {
      console.log("允许4G音频播放？", this.isPlayAudio);
    }
  },
  methods: {
    toSettings () {
      window.location.assign("settings.html")
    },
    fontSizeSet (size) {
      this.fontSize = size
    },
    clearCache () {
      console.log("缓存已清理")
      this.showCacheTips(false)
    },
    showCacheTips (isShow) {
      this.isShowCacheTips = isShow
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../base/app';
.item-wr {
  width: 100%;
  margin-bottom: 10px;
  // border-top: 1px solid @border-color;
  // border-bottom: 1px solid @border-color;
  background-color: #fff;
  padding: 0 25px;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    color: @txt-color;
    .border-b-1px(@border-color);
    font-size: 15px;
    &:last-child::after {
      display: none;
    }
    div {
      flex: none;
    }
    .cnt-r {
      .icon-right {
        width: 20px;
        height: 20px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .bg-image('./73');
        vertical-align: top;
      }
      .txt__warn {
        color: @warn-color;
      }
      .font-size.on {
        color: @main-color;
      }
    }
  }
}
.btn-wr {
  margin-top: 35px;
}
</style>
