<template>
  <div class="Page">
    <div class="card has-background-white-ter">
      <div class="card-content">
        <label class="title is-centered is-size-3">
          Contact
        </label>
        <br />
        <br />
        <div class="columns">
          <div class="column"></div>
          <div class="column is-centered">
            <a class="button is-large is-primary" v-bind:href="'mailto:maxxkozec@hotmail.com'">
              <span class="icon is-medium">
                <font-awesome-icon :icon="mailIcon" size='1x'/>
              </span>
              <span> Email</span> 
            </a>
            <br />
            <br />
            <figure class="image">
              <a href="https://www.linkedin.com/in/maxx-kozec-185b9482/" target="_blank">
                <img id="image" src="../../public/LinkedIn.png" >
              </a>
            </figure>
            <br />
            <br />
            <a class="button is-large is-success" v-bind:href="'https://github.com/KozecM'" v-bind:target="'_blank'">
              <span class="icon is-medium">
                <font-awesome-icon :icon="gitIcon" />
              </span>
              <span> Github</span> 
            </a>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
/*eslint-disable*/
  import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
  import {faGithub} from '@fortawesome/free-brands-svg-icons'

  export default {
    data() {
      return{
        email: "maxxkozec@hotmail.com"
      };
    },

    methods: {
      sendmessage(){
        
      },
    },
    computed: {
      mailIcon () {
        return faEnvelope
      },
      gitIcon () {
        return faGithub
      }
    }
  };
/*eslint -enable*/
</script>

<style scoped>
h3 {
  color: darkgreen;
}
#email {
  background-color: #BEE;
}

#image {
  max-width: 70%;
  max-height: 40%;
  margin-left: auto;
  margin-right: auto;
}
</style>