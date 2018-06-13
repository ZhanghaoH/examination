<template>
  <transition name="fade">
    <div class="dialog-wr" v-if="showDialog">
      <div class="dialog-cover" v-if="showDialog" @click.self="cancelFun"></div>
      <div class="dialog-cnt" v-if="showDialog">
        <div class="dialog-tit" v-if="dialogTit">{{ dialogTit }}</div>
        <div class="dialog-desc">{{ dialogDesc }}</div>
        <div class="dialog-btns-group">
          <button class="dialog-btn dialog-btn-cancel" @click="cancelFun" v-if="cancelTxt">{{ cancelTxt }}</button>
          <button class="dialog-btn dialog-btn-confirm" @click="confirmFun">{{ confirmTxt }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    dialogTit: {
      type: String,
    },
    dialogDesc: {
      type: String,
      default: '提示内容',
    },
    cancelTxt: {
      type: String,
    },
    confirmTxt: {
      type: String,
      default: '确定',
    },
  },
  methods: {
    cancelFun () {
      console.log('cancel')
      this.$emit('action-cancel')
    },
    confirmFun () {
      console.log('confirm')
      this.$emit('action-confirm')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../base/app';
.full-screen() {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-wr {
  .full-screen();
  z-index: 5;
  .dialog-cover {
    .full-screen();
    z-index: 8;
    background: rgba(0, 0, 0, 0.5);
  }
  .dialog-cnt {
    font-size: 18px;
    width: 270px;
    max-height: 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 15;
    overflow: auto;
    .border-radius();
    .dialog-tit,
    .dialog-btns-group {
      height: 45px;
      line-height: 45px;
      text-align: center;
    }
    .dialog-desc {
      .border-b-1px();
      padding: 25px;
      text-align: center;
    }
    .dialog-btns-group {
      display: flex;
      .dialog-btn {
        font-size: 18px;
        flex: 1;
        background-color: #fff;
        &.dialog-btn-cancel {
          color: @warn-color;
        }
        &.dialog-btn-confirm {
          .border-l-1px();
          color: @main-color;
        }
      }
    }
  }
}
</style>
