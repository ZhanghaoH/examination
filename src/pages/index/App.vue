<template>
  <div id="app">
    <exam-dialog :showDialog="isShow" :dialogDesc="warnTxt" @action-confirm="confirmInfo" @action-cancel="hideDialog"></exam-dialog>
    <!-- <button @click="showModal">弹窗</button> -->
    <a href="login.html">登录</a>
    <keep-alive>
      <router-view/>
    </keep-alive>

    <div class="tab-wr">
      <div class="tab-item">
        <router-link :to="{name: 'knowledge'}" tag="div" active-class="on">
          <i class="icon-tab icon-tab-knowledge"></i>
          <span class="tab-text">学习</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name: 'examination'}" tag="div" active-class="on">
          <i class="icon-tab icon-tab-exam"></i>
          <span class="tab-text">考试</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name: 'me'}" tag="div" active-class="on">
          <i class="icon-tab icon-tab-me"></i>
          <span class="tab-text">个人中心</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import examDialog from '../../components/examDialog'
export default {
  name: 'App',
  components: {
    examDialog
  },
  data () {
    return {
      warnTxt: '您尚未进行实名认证',
      warnTit: '提醒',
      isShow: false
    }
  },
  methods: {
    showModal () {
      this.isShow = true
    },
    hideDialog () {
      this.isShow = false
    },
    confirmInfo () {
      this.isShow = false
    }
  }
}
</script>

<style lang="less">
@import '../../base/app';
html,
body {
  width: 100%;
  height: 100%;
  background-color: @tab-bg-color;
}
#app {
  min-height: 100%;
  padding-bottom: 50px;
}
.tab-wr {
  .border-t-1px();
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  background-color: @tab-bg-color;
  height: 50px;
  width: 100%;
  display: flex;
  .tab-item {
    flex: 1;
    text-align: center;
    div {
      height: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      .icon-tab {
        width: 20px;
        height: 20px;
        background-size: contain;
        &.icon-tab-knowledge {
          .bg-image('../../resources/tab_knowledge');
        }
        &.icon-tab-me {
          .bg-image('../../resources/tab_me');
        }
        &.icon-tab-exam {
          .bg-image('../../resources/tab_exam');
        }
      }
      &.on {
        .tab-text {
          color: @main-color;
        }
        .icon-tab-knowledge {
          .bg-image('../../resources/tab_knowledge_on');
        }
        .icon-tab-me {
          .bg-image('../../resources/tab_me_on');
        }
        .icon-tab-exam {
          .bg-image('../../resources/tab_exam_on');
        }
      }
      .tab-text {
        font-size: 10px;
        color: #999;
        margin-top: 5px;
        line-height: 1;
      }
    }
  }
}
</style>
