<template>
  <div class="text-center">

    <div class="row justify-content-center">
      <img v-on:mouseover="bannerHover = true" v-bind:class="[{animated : bannerHover},{shake : bannerHover},{slower : bannerHover}]"src="/images/logo1.png" v-on:mouseout="bannerHover = false" alt="logo">
    </div>

    <div class="row justify-content-center">
    <h1 class="text-grey">deepSeaCoding.com</h1>
    </div>

    <div class="row justify-content-center">
      <p class="text-grey">{{ $t('message.banner') }}</p>
    </div>

  </div>
</template>

<script>
  export default {
    data: function() {
      return {
          bannerHover: false,
      }
    }
  }
</script>

<style scoped>

  img {
  width: 500px;
  height: 150px;
  }

  h1  {
    margin-top: -1.4em;
    font-size: 3.0em;
    font-weight: 600;
    z-index: 5;
  }

@media screen and (max-width: 600px) {

  img {
  width: 400px;
  height: 120px;
  cursor: pointer;
  }

  h1 {
    font-size: 2.2em;
  }
}

</style>
