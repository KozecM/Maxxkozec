<template>
  <div id="app" :class="checkugly">
    <section class="hero is-fullheight is-bold">
      <div class="hero-head">
        <nav class="navbar">
          <div class="navbar-brand">
            <!--
        Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
        -->
            <div class="navbar-burger" v-on:click="showNav = !showNav" :class="{ 'is-active': showNav }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <!--
        Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
        -->
          <div class="navbar-menu" :class="{ 'is-active': showNav }">
            <div class="navbar-end">
              <a @click="goTo('')" class="navbar-item">
                About
              </a>
              <a @click="goTo('Projects')" class="navbar-item">
                My Projects
              </a>
              <a @click="goTo('Contact')" class="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <router-view ref="uglyinfo"></router-view>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  App: '#app',
  data() {
    return{
      showNav: false,
      ugly: false,
    }    
  },
  methods: {
    goTo(place){
      this.ugly = false;
      this.$router.push('/' + place);
    },
    changeugly(data) {
      this.ugly = data;
    }
  },
  computed: {
    checkugly() {
      return this.ugly? 'ugly' : 'normal'
    }
  },
  mounted() {
    this.$watch(
      "$refs.uglyinfo.uglify",
      (new_val) => {
        this.ugly = new_val
      }
    )
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, 'Comfortaa';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.normal {
  background-color: #16a085;
}

.ugly {
  background-color: #ffff00;
}
</style>
