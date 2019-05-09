<template>
  <div class="row justify-content-center mt-5">

<!-- The navbar itself with the conditionals for class binding -->
    <ul class="navbar">
      <li class="navtab">
        <a v-on:click="showWeb = true, showTypo = false, showDesign = false, showContact = false" class="fs-12" href="#">{{ $t('message.but_webdev') }}</a>
      </li>
      <li class="navtab">
        <a v-on:click="showWeb = false, showTypo = true, showDesign = false, showContact = false" class="text-yellow fs-12" href="#">{{ $t('message.but_typo') }}</a>
      </li>
      <li class="navtab">
        <a v-on:click="showWeb = false, showTypo = false, showDesign = true, showContact = false" class="text-magenda fs-12" href="#">{{ $t('message.but_design') }}</a>
      </li>
      <li class="navtab">
        <a v-on:click="showWeb = false, showTypo = false, showDesign = false, showContact = true" class="text-grey fs-12" href="#">{{ $t('message.but_contact') }}</a>
      </li>
    </ul>

<!-- The respective divs -->

<!-- Web Development -->
    <div v-bind:class="[{ show : showWeb },{ animated : showWeb },{ fadeInLeft : showWeb }]" class="collapse row justify-content-center tab">
      <div class="card bg-grey p-3">
        <div class="card-header">
          <span class="fs-14 text-center>">{{ $t('message.web0')}}</span>
          <button id="web" v-on:click="deleteShow" type="button" class="close float-right" data-toggle="tooltip" v-bind:title="$t('message.dismissTab')"><span aria-hidden="true">&times;</span></button>
        </div>
          <div class="row justify-content-center align-items-center">
            <div class="col-md-3">
              <div class="row justify-content-center mb-3">
                <img src="/images/icons-web.png" alt="web-icon" class="icon text-center">
              </div> <!-- here ends image row -->
            </div> <!-- here ends image column -->
          <div class="col-md-9">
            <ul class="pt-3">
              <li>{{ $t('message.web1')}}</li>
              <li>{{ $t('message.web2')}}</li>
              <li>{{ $t('message.web3')}}</li>
              <li>{{ $t('message.web4')}}</li>
              <li>{{ $t('message.web5')}}</li>
              <li>{{ $t('message.web6')}}</li>
            </ul>
          </div> <!-- here ends col-md-8 -->
        </div> <!-- here ends row -->
        <div class="card-footer text-center">
          <a href="#webCollapse" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="Webcollapse">{{ $t('message.web_but')}}</a>
        </div> <!-- here ends card-footer -->
        <div class="collapse" id="webCollapse">
          <div class="p-3">
            <ul class="list-group">
              <li class="list-group-item bg-grey">{{ $t('message.webA')}}</li>
              <li class="list-group-item bg-grey"><a href="https://ribbonsofeuphoria.com">ribbonsofeuphoria.com</a><br>{{ $t('message.webB')}}</li>
              <li class="list-group-item bg-grey"><a href="https://tetradiamagazine.gr">tetradiamagazine.gr</a><br>{{ $t('message.webC')}}</li>
              <!-- <li class="list-group-item bg-grey"><a href="http://kuakomekiki.com">kuakomekiki.com</a><br>{{ $t('message.webD')}}<a href="http://www.pgworks.gr">pgworks.gr </a>{{ $t('message.webE')}}<a href="http://mariabacha.com"> {{ $t('message.webF')}}</a></li> -->
              <li class="list-group-item bg-grey"><a href="https://deepseacoding.com/projects/wpcomicstore/">Retro Comics</a><br>{{ $t('message.webG')}}</li>
            </ul>
          </div> <!-- here ends list div -->
        </div> <!-- here ends collapse -->
      </div> <!-- here ends card -->
    </div> <!-- here ends web -->

<!-- Typography -->
<div v-bind:class="[{ show : showTypo },{ animated : showTypo },{ fadeInRight : showTypo }]" class="collapse row justify-content-center tab">
  <div class="card bg-grey p-3">
    <div class="card-header">
      <span class="fs-14 text-center>">{{ $t('message.web0')}}</span>
      <button id="typo" v-on:click="deleteShow" type="button" class="close float-right" data-toggle="tooltip" v-bind:title="$t('message.dismissTab')"><span aria-hidden="true">&times;</span></button>
    </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-md-3">
          <div class="row justify-content-center mb-3">
            <img src="/images/icons-typo.png" alt="typography-icon" class="icon text-center">
          </div> <!-- here ends image row -->
        </div> <!-- here ends image column -->
      <div class="col-md-9">
        <ul class="pt-3">
          <li>{{ $t('message.typo1')}}</li>
          <li>{{ $t('message.typo2')}}</li>
          <li>{{ $t('message.typo3')}}</li>
          <li>{{ $t('message.typo4')}}</li>
          <li>{{ $t('message.typo5')}}</li>
        </ul>
      </div> <!-- here ends col-md-8 -->
    </div> <!-- here ends row -->
    <div class="card-footer text-center">
      <a href="#typoCollapse" class="text-yellow" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="typocollapse">{{ $t('message.typo_but')}}</a>
    </div> <!-- here ends card-footer -->
    <div class="collapse" id="typoCollapse">
      <div class="p-3">
        <ul class="list-group">
          <li class="list-group-item bg-grey"><a href="http://www.stochastis.gr" class="text-yellow">{{ $t('message.typoA1')}}</a><br>{{ $t('message.typoA')}}</li>
          <li class="list-group-item bg-grey"><a href="https://tetradiamagazine.gr" class="text-yellow">{{ $t('message.typoB1')}}</a><br>{{ $t('message.typoB')}}</li>
          <li class="list-group-item bg-grey"><a href="https://www.ropipublications.com" class="text-yellow">{{ $t('message.typoC1')}}</a><br>{{ $t('message.typoC')}}</li>
          <li class="list-group-item bg-grey"><a href="https://www.dardanosnet.gr" class="text-yellow">{{ $t('message.typoD1')}} </a><br>{{ $t('message.typoD')}}</li>
          <li class="list-group-item bg-grey"><a href="https://rizesbooks.com" class="text-yellow">{{ $t('message.typoE1')}}</a><br>{{ $t('message.typoE')}}</li>
          <li class="list-group-item bg-grey"><a href="http://doudoumis.gr" class="text-yellow">{{ $t('message.typoF1')}}</a><br>{{ $t('message.typoF')}}</li>
        </ul>
      </div> <!-- here ends list div -->
    </div> <!-- here ends collapse -->
  </div> <!-- here ends card -->
</div> <!-- here ends typo -->

<!-- Design -->
<div v-bind:class="[{ show : showDesign },{ animated : showDesign },{ fadeInUp : showDesign }]" class="collapse row justify-content-center tab">
  <div class="card bg-grey p-3">
    <div class="card-header">
      <span class="fs-14 text-center>">{{ $t('message.web0')}}</span>
      <button id="design" v-on:click="deleteShow" type="button" class="close float-right" data-toggle="tooltip" v-bind:title="$t('message.dismissTab')"><span aria-hidden="true">&times;</span></button>
    </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-md-3">
          <div class="row justify-content-center mb-3">
            <img src="/images/icons-design.png" alt="design-icon" class="icon text-center">
          </div> <!-- here ends image row -->
        </div> <!-- here ends image column -->
      <div class="col-md-9">
        <ul class="pt-3">
          <li>{{ $t('message.design1')}}</li>
          <li>{{ $t('message.design2')}}</li>
          <li>{{ $t('message.design3')}}</li>
          <li>{{ $t('message.design4')}}</li>
          <li>{{ $t('message.design5')}}</li>
          <li>{{ $t('message.design6')}}</li>
        </ul>
      </div> <!-- here ends col-md-8 -->
    </div> <!-- here ends row -->
    <div class="card-footer text-center">
      <a href="#designCollapse" class="text-magenda" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="designCollapse">{{ $t('message.design_but')}}</a>
    </div> <!-- here ends card-footer -->
    <div class="collapse" id="designCollapse">
      <div class="p-3">
        <ul class="list-group">
          <li class="list-group-item bg-grey">
            <audio controls>{{ $t('message.designE')}}
              <source src="/audio/betsy.mp3" type="audio/mpeg">
            </audio>
            <br>{{ $t('message.designA')}}
          </li>
          <li class="list-group-item bg-grey">
            <audio controls>{{ $t('message.designE')}}
              <source src="/audio/nelly1.mp3" type="audio/mpeg">
            </audio>
            <br>{{ $t('message.designB')}}
          </li>
          <li class="list-group-item bg-grey">
            <audio controls>{{ $t('message.designE')}}
              <source src="/audio/nelly2.mp3" type="audio/mpeg">
            </audio>
            <br>{{ $t('message.designC')}}
          </li>
          <li class="list-group-item bg-grey">
            <a class="text-magenda" href="http://kuakomekiki.com/bookapp/">{{ $t('message.designD1')}}</a>
            <br>{{ $t('message.designD')}}
          </li>
        </ul>
      </div> <!-- here ends list div -->
    </div> <!-- here ends collapse -->
  </div> <!-- here ends card -->
</div> <!-- here ends design -->

<!-- Contact -->
<div v-bind:class="[{ show : showContact },{ animated : showContact },{ fadeInDown : showContact }]" class="collapse row justify-content-center tab">
  <div class="card bg-grey p-3">
    <div class="card-header">
      <span class="fs-14 text-center>">{{ $t('message.contact0')}}</span>
      <button id="contact" v-on:click="deleteShow" type="button" class="close float-right" data-toggle="tooltip" v-bind:title="$t('message.dismissTab')"><span aria-hidden="true">&times;</span></button>
    </div>
      <div class="row justify-content-center align-items-center px-3">
        <div class="col-md-3">
          <div class="row justify-content-center mb-3">
            <img src="/images/icons-contact.png" alt="design-icon" class="icon text-center">
          </div> <!-- here ends image row -->
        </div> <!-- here ends image column -->
      <div class="col-md-9">
        <ul class="pt-3">
          <li>{{ $t('message.contact1')}}</li>
          <li>{{ $t('message.contact2')}}+30 6972151616</li>
          <li>Email: <a href="mailto:info@deepseacoding.com" class="text-black">info@deepseacoding.com</a></li>
        </ul>
      </div> <!-- here ends col-md-8 -->
    </div> <!-- here ends row -->
    <div class="card-footer text-center">
      <a href="#contactCollapse" class="text-black" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="contactCollapse">{{ $t('message.contact_but')}}</a>
    </div> <!-- here ends card-footer -->
    <div class="collapse" id="contactCollapse">
      <div class="p-3">
        <ul class="list-group">
          <li class="list-group-item bg-grey"><p><img src="/images/stathis.jpg" alt="stathis" class="photo">{{ $t('message.contactA')}}</p></li>
          <li class="list-group-item bg-grey text-center"><a href="http://kuakomekiki.com" class="text-black">{{ $t('message.contactB')}}</a></li>
        </ul>
      </div> <!-- here ends list div -->
    </div> <!-- here ends collapse -->
  </div> <!-- here ends card -->
</div> <!-- here ends contact -->

  </div>
</template>


<!-- **************** SCRIPT ***********************-->
<script>

export default {
    data: function() {
      return {
          showWeb: false,
          showTypo: false,
          showDesign: false,
          showContact: false,
    }
  },
    methods: {
// We need to fadeOut the div and reset the boolean after it has disappeared
      deleteShow: function(event, boolean) {

        var el = document.getElementById(event.currentTarget.id)
        el.parentNode.parentNode.parentNode.classList.add('fadeOut');
        setTimeout(() => this.showWeb = false, 600);
        setTimeout(() => this.showTypo = false, 600);
        setTimeout(() => this.showDesign = false, 600);
        setTimeout(() => this.showContact = false, 600);
    }
  }
}
</script>

<!-- **************** STYLE ***********************-->
<style scoped>

  audio {
    width: 200px;
  }

  .navbar {
    display: block;
    list-style-type: none;
  }

  .navtab {
    padding: 10px 10px;
  }

  .tab {
    border-radius: 10%;
  }

  .icon {
    width: 120px;
    height: 120px;
    margin-top: 20px;
    border-radius: 12px;
  }

  .photo {
    width: 125px;
    height:150px;
    float: left;
    padding-right: 10px;
  }

/*  Media Queries  */

@media screen and (min-width: 769px)
{
  .navbar {
    display: flex;
  }

  audio {
    width: 300px;
  }
}

</style>
