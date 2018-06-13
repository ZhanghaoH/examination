<template>
  <div class="wr">
    <div class="textarea-wr">
      <textarea name="feedback" placeholder="请留下您的意见或建议，我们将尽快进行改进" v-model="feedbackCnt"></textarea>
    </div>
    <!-- <p>{{ feedbackCnt }}</p> -->
    <div class="btn-wr">
      <button class="btn btn-main" @click="submitFeedback">提交反馈</button>
    </div>
    <examDialog :showDialog="isShow" :dialogDesc="warnTxt" @action-confirm="confirmInfo"></examDialog>
  </div>
</template>

<script>
import examDialog from '../../components/examDialog'
export default {
  components: {
    examDialog,
  },
  data () {
    return {
      feedbackCnt: '',
      isShow: false,
      warnTxt: '',
    }
  },
  methods: {
    submitFeedback () {
      this.warnTxt = '反馈成功'
      this.isShow = true
    },
    confirmInfo () {
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../base/app';
.wr {
  height: 100%;
  background-color: @tab-bg-color;
  padding-top: 20px;
  .textarea-wr {
    margin: 0 15px;
    overflow: hidden;
    background-color: #fff;
    font-size: 0;
    .border-radius();
    border: 1px solid @border-color;
    textarea {
      outline: none;
      resize: none;
      width: 100%;
      height: 210px;
      font-size: 13px;
      padding: 15px;
    }
  }
  .btn-wr {
    margin-top: 30px;
    margin: 30px 15px 0;
  }
}
</style>