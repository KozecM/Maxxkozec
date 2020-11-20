<template>
  <div class="Page">
    <div class="card has-background-white-ter">
      <div class="card-content">
        <label class="title is-centered is-size-3">
          Contact
        </label>
        <br />
        <div class="columns">
          <div class="column">
            Email: <a href="mailto:maxxkozec@hotmail.com"> maxxkozec@hotmail.com</a>
          </div>
          <div class="column">
            <figure class="image is-3by1">
              <a href="https://www.linkedin.com/in/maxx-kozec-185b9482/" target="_blank">
                <img id="image" src="../../public/LinkedIn.png" >
              </a>
            </figure>
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

#image {
  max-width: 70%;
  max-height: 40%;
}
</style>