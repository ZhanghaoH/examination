<template>
  <div id="certify">
    <div class="item-wr">
      <div class="item">
        <div class="cnt-l">
          <span>姓名</span>
        </div>
        <div class="cnt-r">
          <span>张浩</span>
        </div>
      </div>
      <div class="item">
        <div class="cnt-l">
          <span>手机号</span>
        </div>
        <div class="cnt-r">
          <span>18236586295</span>
        </div>
      </div>
      <div class="item">
        <div class="cnt-l">
          <span>身份证号</span>
        </div>
        <div class="cnt-r">
          <span>410184194510011001</span>
        </div>
      </div>
      <div class="item">
        <div class="cnt-l">
          <span>所属行业</span>
        </div>
        <div class="cnt-r">
          <span>会计类</span>
        </div>
      </div>
      <div class="item">
        <div class="cnt-l">
          <span>所属地区</span>
        </div>
        <div class="cnt-r">
          <span>河南省郑州市中原区</span>
        </div>
      </div>
      <div class="item">
        <div class="cnt-l">
          <span>单位名称</span>
        </div>
        <div class="cnt-r">
          <span>烟草科技公司</span>
        </div>
      </div>
      <div class="item">
        <div class="cnt-l">
          <span>经营许可证</span>
        </div>
        <div class="cnt-r">
          <span @click="isShowImage=true">点击查看</span>
          <i class="icon-right"></i>
        </div>
      </div>
    </div>
    <div class="page-cover" v-show="isShowImage">
      <div class="image-wr">
        <img src="./25@3x.png" alt="营业执照">
        <i class="icon-close" @click="isShowImage=false"></i>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      isPlayAudio: false,
      fontSize: 2,
      isShowCacheTips: false,
      dialogDesc: '确认清理缓存',
      cancelTxt: '取消',
      isShowImage: false
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import '../../base/app';
.item-wr {
  width: 100%;
  margin-bottom: 10px;
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
.page-cover {
  .full-screen();
  z-index: 8;
  background: rgba(0, 0, 0, 0.5);
  .image-wr {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: 86.7%;
    img {
      width: 100%;
    }
    .icon-close {
      position: absolute;
      z-index: 9;
      top: -5px;
      right: -5px;
      width: 20px;
      height: 20px;
      .bg-image('./66');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
}
</style>
