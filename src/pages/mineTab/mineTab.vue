<template>
  <div class="container">
    <div class="me-wr">
      <div class="avatar"></div>
      <div class="infos-wr">
        <div class="infos-tel-wr">
          <span class="infos-tel">18236586295</span>
          <img class="icon-right" src="./right.svg">
        </div>
        <a class="infos-certify" href="certifyInfo.html">
          <i class="icon-certification"></i>
          <span>已实名认证</span>
        </a>
      </div>
    </div>
    <div class="me-item-wr" style="border-top: none;padding-top: 10px">
      <div class="me-item">
        <i class="icon-me-item icon-learnpros"></i>
        <span>学习进度</span>
      </div>
    </div>
    <div class="me-item-wr">
      <div class="me-item">
        <i class="icon-me-item icon-scores"></i>
        <span>考试成绩</span>
      </div>
      <div class="me-item">
        <i class="icon-me-item icon-cards"></i>
        <span>考试证书</span>
      </div>
      <div class="me-item">
        <i class="icon-me-item icon-examwarns"></i>
        <span>考试提醒</span>
      </div>
    </div>
    <div class="me-item-wr">
      <div class="me-item">
        <i class="icon-me-item icon-marks"></i>
        <span>收藏</span>
      </div>
      <div class="me-item" @click="toSettings">
        <i class="icon-me-item icon-settings"></i>
        <span>设置</span>
      </div>
    </div>
    <!-- <feedback-page></feedback-page> -->
  </div>
</template>

<script>
// import feedbackPage from '../feedback/feedback'
export default {
  methods: {
    toSettings () {
      window.location.assign("settings.html")
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../base/app';
.me-wr {
  display: flex;
  align-items: center;
  padding-left: 40px;
  width: 100%;
  height: 120px;
  .bg-image('./35');
  background-color: #fff;
  background-size: 100% 120px;
  background-repeat: no-repeat;
  .avatar {
    display: inline-block;
    width: 55px;
    height: 55px;
    .bg-image('./36');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-right: 13px;
  }
  .infos-wr {
    font-size: 13px;
    color: #fff;
    display: inline-block;
    vertical-align: top;
    .icon-right {
      width: 16px;
      height: 16px;
      vertical-align: top;
    }
    .infos-certify {
      display: block;
      color: #fff;
      font-size: 0;
      margin-top: 3px;
      span {
        font-size: 13px;
      }
      .icon-certification {
        width: 16px;
        height: 12px;
        .bg-image('./72');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-right: 6px;
      }
    }
  }
}
.me-item-wr {
  width: 100%;
  margin-bottom: 10px;
  border-top: 1px solid @border-color;
  border-bottom: 1px solid @border-color;
  background-color: #fff;
  padding: 0 25px;
  .me-item {
    display: flex;
    align-items: center;
    height: 50px;
    .border-b-1px();
    font-size: 15px;
    .icon-me-item {
      width: 24px;
      height: 22px;
      margin-right: 17px;
      vertical-align: top;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      &.icon-learnpros {
        .bg-image('./37');
      }
      &.icon-scores {
        .bg-image('./38');
      }
      &.icon-cards {
        .bg-image('./39');
      }
      &.icon-examwarns {
        .bg-image('./40');
      }
      &.icon-marks {
        .bg-image('./41');
      }
      &.icon-settings {
        .bg-image('./42');
      }
    }
    &:last-child::after {
      display: none;
    }
  }
}
</style>
