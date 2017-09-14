<template>
  <div class="page-wrapper">
    <vheader></vheader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <vfooter></vfooter>
  </div>
</template>

<script type="text/ecmascript-6">
import vheader from 'base/vheader/vheader'
import vfooter from 'base/vfooter/vfooter'

export default {
  components: {
    vheader, vfooter
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>
