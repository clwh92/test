<template>
    <div>
      <video class="wh_30" controls id="video" @loadeddata="drawImage($event)" preload="auto" autoplay="false">
        <source :src="videoUrl" type="video/mp4">
      </video>
      <div>
        <img :src="imgUrl" alt="" class="wh_30 video_image">
      </div>
    </div>
</template>

<script>
import videoUrl from '../assets/videos/VID_20210924_115743.mp4'
export default {
  name: 'videoImage',
  data () {
    return {
      videoUrl: videoUrl,
      imgUrl: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.drawImage()
    })
  },
  methods: {
    drawImage  (event) {
      // const videoObj = document.querySelector('video')
      const videoObj = event.target
      const canvas = document.createElement('canvas')
      videoObj.currentTime = 50 // 设置为当时视频播放的时间戳
      canvas.width = videoObj.videoWidth
      canvas.height = videoObj.videoHeight
      const context = canvas.getContext('2d')
      context.drawImage(videoObj, 0, 0, canvas.width, canvas.height)
      const imageData = canvas.toDataURL('image/png')
      videoObj.poster = imageData // 视频封面
      this.imgUrl = imageData
    }
  }
}

</script>

<style scoped>
.wh_30{
  width: 30%;
  height: 30%;
}
</style>
