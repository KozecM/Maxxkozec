<template>
  <div class="Page">
    <div class="card has-background-white-ter">
      <div class="card-content">
        <label class="title is-centered is-size-3">
          My Projects
        </label>
        <br />
        <label class="subtitle is-centered">
          Everything I have done, am doing, and will continue to do
        </label>
      </div>
    </div>
    <br>
    <div class="card has-background-grey-lighter">
      <div class="card-content">
        <div class="columns">
          <div class="column"></div>
          <div class="column">
            <p class="title is-family-sans-serif is-centered">Who am I? </p>
            <p class="is-family-sans-serif">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
    <br />
    <div class="card has-background-grey-lighter">
      <div class="card-content">
        <div class="columns">
          <div class="column"></div>
          <div class="column">
            <p class="title is-family-sans-serif is-centered">What I Can Do.</p>
            <p class="is-family-sans-serif">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
    <br />
    <div class="card has-background-grey-lighter">
      <div class="card-content">
        <div class="columns">
          <div class="column"></div>
          <div class="column">
            <p class="title is-family-sans-serif is-centered">I'm Here to Help.</p>
            <p class="is-family-sans-serif">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br />
            <a class="button" id="email"  v-bind:href="'mailto:' + email">Message Me</a>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/

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
</style>