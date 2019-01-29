<template>
  <div>
    <div class="fl-p">
      <div class="content">
        <button class="btn-start" @click="startRps">Start</button>
        <button class="btn-stop" @click="clearRps">Reset</button>
      </div>
    </div>
    <div class="fl-p">
      <div class="content">
        <div class="display-rps-result">{{ message }}</div>
      </div>
    </div>
    <div class="fl-p">
      <div class="content">
        <button
          class="btn-select"
          v-for="option in rps"
          :value="option.value"
          :key="option.value"
          @click="selectRps(option)">
          {{ option.label }}
        </button>
      </div>
    </div>
    <div class="fl-p">
      <div class="content">
        <div class="fl-p">
          <label-image :selected-rps="selected" label="あなた"></label-image>
          <label-image :selected-rps="opponent" label="対戦相手"></label-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LabelImage from '@/components/LabelImage'

export default {
  name: 'HelloWorld',
  components: {
    LabelImage
  },
  data () {
    return {
      msg: 'top page',
      rps: [
        { value: 0, label: 'グー', win: 1 },
        { value: 1, label: 'チョキ', win: 2 },
        { value: 2, label: 'パー', win: 0 }
      ],
      selected: '',
      opponent: '',
      message: 'Start ボタンを押してください。',
      messageList: [
        'じゃんけん始めるよー！',
        'せーのっ！',
        'じゃん',
        'けん',
        'ぽん！'
      ],
      rpsTimer: null,
      messageListIndex: 0
    }
  },
  methods: {
    selectRps (selectedValue) {
      this.selected = selectedValue
    },
    clearRps () {
      this.stopRps
      this.message = 'Start ボタンを押してください。'
      this.opponent = ''
    },
    stopRps () {
      clearInterval(this.rpsTimer)
    },
    setIntervalMessage () {
      this.message = this.messageList[this.messageListIndex]
      if (this.messageListIndex === 4) {
        this.getOpponent()
      } else if (this.messageListIndex > 4) {
        this.judgeMessage()
        this.stopRps()
      }
      this.messageListIndex++
    },
    judgeMessage () {
      if (this.selected.win === this.opponent.value) {
        this.message = '勝ち！！'
      } else if (this.selected.value === this.opponent.value) {
        this.message = 'あいこ！'
      } else {
        this.message = '負け...'
      }
    },
    startRps () {
      this.messageListIndex = 0
      this.rpsTimer = setInterval(() => this.setIntervalMessage(), 1000)
    },
    getOpponent() {
      let randomisedRps = Math.floor(Math.random() * Math.floor(3))
      let ops = this.rps.filter( el => el.value === randomisedRps)
      this.opponent = ops[0]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fl-p {
  display: flex;
}
.selected-label {
  padding: 10px 20px;
}
.display-rps-result{
  vertical-align: middle;
  text-align: center;
  font-size: 3rem;
}
.btn-stop {
  height: 50px; 
  width: 130px; 
  padding: 17px; 
  text-align: center; 
  color: #FFFFFF; 
  font-family: 'Trebuchet MS'; 
  font-size: 17px; 
  background: #FBFBFB; 
  background: -moz-linear-gradient(top, #FBFBFB 0%, #808080 100%); 
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FBFBFB), color-stop(100%,#808080)); 
  background: -webkit-linear-gradient(top, #FBFBFB 0%,#808080 100%); 
  background: -o-linear-gradient(top, #FBFBFB 0%,#808080 100%); 
  background: -ms-linear-gradient(top, #FBFBFB 0%,#808080 100%); 
  background: linear-gradient(to bottom, #FBFBFB 0%,#808080 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FBFBFB',  endColorstr='#808080', GradientType=0 ); 
  border-width: 1px; 
  border-style: solid; 
  border-color: #FFFFFF; 
  border-radius: 7px; 
  box-shadow: 0px 1px 0px 0px #FFFFFF; 
  text-shadow: 0px 1px 0px #8F8F8F; 
  margin: 20px;
}
.btn-select {
  height: 50px; 
  width: 130px; 
  padding: 17px; 
  text-align: center; 
  color: #FFFFFF; 
  font-family: 'Trebuchet MS'; 
  font-size: 17px; 
  background: #FBB450; 
  background: -moz-linear-gradient(top, #FBB450 0%, #F89306 100%); 
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FBB450), color-stop(100%,#F89306)); 
  background: -webkit-linear-gradient(top, #FBB450 0%,#F89306 100%); 
  background: -o-linear-gradient(top, #FBB450 0%,#F89306 100%); 
  background: -ms-linear-gradient(top, #FBB450 0%,#F89306 100%); 
  background: linear-gradient(to bottom, #FBB450 0%,#F89306 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FBB450',  endColorstr='#F89306', GradientType=0 ); 
  border-width: 1px; 
  border-style: solid; 
  border-color: #C97E1C; 
  border-radius: 7px; 
  box-shadow: 0px 1px 0px 0px #FFE0B5; 
  text-shadow: 0px 1px 0px #8F7F24; 
  margin: 20px;
}
.btn-start {
  height: 50px; 
  width: 130px; 
  padding: 17px; 
  text-align: center; 
  color: #FFFFFF; 
  font-family: 'Trebuchet MS'; 
  font-size: 17px; 
  background-color: #2379FB; 
  border-width: 1px; 
  border-style: solid; 
  border-color: #FFFFFF; 
  border-radius: 7px; 
  box-shadow: 0px 1px 0px 0px #FFFFFF; 
  text-shadow: 0px 1px 0px #8F8F8F; 
  margin: 20px;
}
.content {
  margin: auto;
}
</style>
