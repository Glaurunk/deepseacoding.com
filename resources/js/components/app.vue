<template>
  <div>
    <languages></languages>
    <banner></banner>
    <navtabs></navtabs>
    <mainfooter></mainfooter>
  </div>
</template>

<script>
  import languages from './languages.vue'
  import banner from './banner.vue'
  import navtabs from './navtabs.vue'
  import mainfooter from './mainfooter.vue'

  export default {
    components: {
      'languages': languages,
      'banner': banner,
      'navtabs': navtabs,
      'mainfooter': mainfooter
    }
 }
</script>




<style>
</style>
