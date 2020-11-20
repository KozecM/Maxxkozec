<template>
  <div class="Page">
    <div class="card has-background-white-ter">
      <div class="card-content">
        <label class="title is-centered is-size-3">
          Hi! I'm Maxx
        </label>
        <br />
        <label class="subtitle is-centered">
          A Computer Scientist
        </label>
        <div class="columns">
          <div class="column"></div>
          <div class="column">
            <figure class="image is-is-square">
              <img src="../../public/IMG_96221.jpg" alt="this is me" class="is-rounded">
            </figure>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
    <br>
    <div class="card has-background-grey-lighter">
      <div class="card-content">
        <div class="columns">
          <div class="column"></div>
          <div class="column">
            <p class="title is-family-sans-serif is-centered">Who am I? </p>
            <p class="is-family-sans-serif">I am a computer scientist/web developer based in Hood River Oregon. 
              I graduated from Oregon State University in 2020. I work mainly in web development but I enjoy all things programming.</p>
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
            <p class="is-family-sans-serif">I mainly focus on full stack development so I am able to build entire websites from the user interface to the database. 
              I am well versed in VueJs, Firebase, and AWS and I am very quick to pick up and learn new skills. </p>
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
            <p class="is-family-sans-serif">I am currently available for freelance and full time work. If you think I would be a good fit or just want to say hi, please get in touch.</p>
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