<template>
  <div>
      <p class="text-right text-secondary mt-5">
        <a href="#" v-on:click="$i18n.locale = 'el', elCurrent = true, enCurrent = false" v-show="enCurrent">πατήστε για ελληνικά</a>
        <a href="#" v-on:click="$i18n.locale = 'en', elCurrent = false, enCurrent = true" v-show="elCurrent">press for english</a>
      </p>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            elCurrent: true,
            enCurrent: false
          }
        }
    }
</script>
