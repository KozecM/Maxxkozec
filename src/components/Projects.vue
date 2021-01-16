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
            <p class="title is-family-sans-serif is-centered">Scott Bot</p>
            <p class="is-family-sans-serif">This is a very simple Bot that is desinged to allow one person (Scott) to give people stars on my discord server. It also does a few other things 
              like repeating what was said and outputting random 99 quotes. I plan on desining a website that displays the current star rankings for each discord server that is hosting the bot.
            </p>
            <br />
            <a class="button" id="email"  v-bind:href="'https://github.com/KozecM/ScottBot/tree/develop'">View Code</a>
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
            <p class="title is-family-sans-serif is-centered">Energy Assistance Application</p>
            <p class="is-family-sans-serif">This is a simple application for a non profit that is designed to get information to decided if a person is eligible for assistance with their energy bills.
              It uses firebase as a backend and VueJS on the frontend. It is very flexible and works on most devices (hasn't been tested on fridge screens)
            </p>
            <br />
            <a class="button" id="email"  v-bind:href="'https://github.com/KozecM/Energy_Form'">View Code</a>
            <a class="button" id="email"  v-bind:href="'https://energy-assistance-app.web.app/'">View Site</a>
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
            <p class="title is-family-sans-serif is-centered">Webmail and pdf creation for Sgioba</p>
            <p class="is-family-sans-serif">This project was a part of some freelance work I did for a company based in france making an app for councellors in universities. I worked in PHP and JavaScript in order to work with legacy code and 
              add new, required features. Unfortunatly I am not able to show the code I work on because of the private and sensitive data that I was working with. 
            </p>
            <br />
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