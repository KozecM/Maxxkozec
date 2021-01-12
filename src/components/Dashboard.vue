<template>
  <div class="Page" :class="checkUglyPage">
    <div :class="checkUglyIntro">
      <div class="card-content">
        <label class="title is-centered is-size-3">
          Hi! I'm Maxx
        </label>
        <br />
        <label class="subtitle is-centered">
          A Computer Scientist
        </label>
        <div :class="{
            'columns': !uglify,
            '': uglify,
          }">
          <div class="column" v-if="!uglify"></div>
          <div class="column">
            <figure class="image is-is-square">
              <img v-if="!uglify" src="../../public/profile.jpg" alt="this is me" class="is-rounded">
              <img v-else src="../../public/badface.jpg" alt="BLARG BLARG">
            </figure>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
    <br>
    <div :class="checkuglycard">
      <div class="card-content">
        <div :class="{
            'columns': !uglify,
            '': uglify,
          }">
          <div class="column">
            <p class="title is-family-sans-serif is-centered">Who I am. </p>
            <p class="is-family-sans-serif">I am a computer scientist/web developer based in Hood River Oregon. 
              I graduated from Oregon State University in 2020. I work mainly in web development but I enjoy all things programming.</p>
          </div>
          <div class="column">
            <p class="title is-family-sans-serif is-centered">What I Can Do.</p>
            <p class="is-family-sans-serif">I mainly focus on full stack development so I am able to build entire websites from the user interface to the database. 
              I am well versed in VueJs, Firebase, and AWS and I am very quick to pick up and learn new skills. </p>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div :class="checkuglycard" >
      <div class="card-content">
        <div :class="{
            'columns': !uglify,
            '': uglify,
          }">
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
    <br />
    <div :class="checkuglycard">
      <div class="card-content">
        <div :class="{
            'columns': !uglify,
            '': uglify,
          }">
          <div class="column"></div>
          <div class="column">
            <p class="title is-family-sans-serif is-centered">Make my website Ugly</p>
            <p class="is-family-sans-serif">This will make the website look like a horror. Please use at your own risk</p>
            <br />
            <a class="button" id="email" @click="toggleUgly()">Uglify!</a>
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
        email: "maxxkozec@hotmail.com",
        uglify: false,
      };
    },

    methods: {
      toggleUgly(){
        this.uglify = !this.uglify
        this.$emit('toggleEvent', this.uglify)
      },
    },

    computed: {
      checkuglycard() {
        return this.uglify ? 'ugly' : 'card has-background-grey-lighter';
      },
      checkUglyPage() {
        return this.uglify ? 'ugly' : '';
      },
      checkUglyIntro() {
        return this.uglify ? 'ugly_intro': 'card has-background-white-ter'
      }
    }
  };
/*eslint -enable*/
</script>

<style scoped>
h3 {
  color: darkgreen;
}
.card#email {
  background-color: #16a085;
}
.ugly{
  color: blueviolet;
  background: chartreuse;
  background-image: url(../../public/badbackground.jpg);
}

.Page.ugly{
  background-color: darkorange;
}

.ugly_intro{
  background-color: purple;
}

.ugly p.title{
  color: red
}

.ugly a.button{
  color: cyan;
  background-color: darkmagenta;
}
</style>