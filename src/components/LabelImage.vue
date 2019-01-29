<template>
  <div class="label-wrapp">
    <h2>{{ label }}</h2>
    <img v-if="selectedImage !== baseImgPath" :src="selectedImage" width="200px"/>
  </div>
</template>

<script>
export default {
  name: 'RpsLabel',
  props: [
    'label',
    'selectedRps'
  ],
  data () {
    return {
      selectedImagePath: '',
      baseImgPath: './img/'
    }
  },
  methods: {
    getOpponent() {
      let randomisedRps = Math.floor(Math.random() * Math.floor(3))
      let ops = this.rps.filter( el => el.value === randomisedRps)
      this.opponent = ops[0]
    }
  },
  computed: {
    selectedImage () {
      let imgFileName = ''
      switch (this.selectedRps.value) {
        case 0:
          imgFileName = 'janken_gu.png'
          break
        case 1:
          imgFileName = 'janken_choki.png'
          break
        case 2:
          imgFileName = 'janken_pa.png'
          break
      }
      return this.baseImgPath + imgFileName
    }
  }
}
</script>

<style scoped>
.label-wrapp {
  width: 300px;
  text-align: center;
}
</style>