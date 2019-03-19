<template>
  <div class="">
    <img src="/images/orbital.gif" alt="orbital" class="orbital my-5 mx-auto">
    <footer class="mb-3">
       <p class="text-grey text-center fs-12">deepSeaCoding.com &copy;2019 | <a href="#" class="text-grey" data-toggle="modal" data-target="#policy">{{ $t('message.policy')}}</a></p>
       <div v-bind:class="[{animated : hoverOver},{heartBeat : hoverOver}]" v-on:mouseover="hoverOver = true" v-on:mouseout="hoverOver=false" class="row socials justify-content-center">
           <div><a href="https://www.facebook.com/deepseacoding/"><img src="/images/facebook-logo.png" alt="fb-icon" data-toggle="tooltip" v-bind:title="$t('message.footer') + 'Facebook!'"></a></div>
           <div><a href="https://twitter.com/AndreouStathis"><img src="/images/twitter-logo.png" alt="twitter-icon" data-toggle="tooltip" v-bind:title="$t('message.footer') + 'Twitter!'"></a></div>
           <div><a href="https://www.instagram.com/glaurunk/"><img src="/images/instagram-icon.png" alt="instagram-icon" data-toggle="tooltip" v-bind:title="$t('message.footer') + 'Instagram!'"></a></div>
           <div><a href="https://github.com/Glaurunk"><img src="/images/github-logo.png" alt="github-icon" data-toggle="tooltip" v-bind:title="$t('message.footer') + 'Github!'"></a></div>
       </div><!-- close socials -->
   </footer>

<!-- Privacy Policy Modal -->
       <div class="modal fade" id="policy" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
         <div class="modal-dialog" role="document">
           <div class="modal-content">
             <div class="modal-header bg-grey">
               <h5 class="modal-title" id="exampleModalLongTitle">{{ $t('message.policy')}}</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div class="modal-body bg-grey">
                <p>{{ $t('message.policy_content')}}</p>
                <small><em>{{ $t('message.policy_date')}}18/02/2019</em></small>
             </div> <!-- Here ends modal body -->
           </div> <!-- Here ends modal content -->
         </div> <!-- Here ends modal dialogue -->
       </div> <!-- Here ends modal. Following the 2 closing tags -->

    </div> <!-- Here ends vue parent div -->
  </template>
<script>

export default {
  data: function() {
    return {
      hoverOver: false
    }
  }
}
</script>

<style scoped>

.orbital {
  -webkit-animation: rotation 60s infinite linear;
}

@-webkit-keyframes rotation {
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(359deg);
		}
}

@media screen and (max-width: 991px) {
  .orbital {
    height: 90%;
    width: 90%;
    display: block;
  }
}

@media screen and (min-width: 992px) {
  .orbital {
    height: 70%;
    width: 70%;
    display: block;
  }
}

.socials img {
  width: 50px;
  padding: 0 8px;
}
</style>
