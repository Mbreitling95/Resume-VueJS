<template>
  <div class="hello">
    <h1>{{ msg }}, My Name is {{ bio.name }}</h1>

    <h2>My Contact info</h2>
    <ul v-for="(value, key) in bio.ObjContacts" >
      <li>{{ key }}: <a href="#" target="_blank">{{ value }}</a></li>
    </ul>
    <h2>My Accounts </h2>
    <ul>
      <li><a href="#" target="_blank">GitHub</a></li>
      <li><a href="#" target="_blank">Stack OverFlow</a></li>
      <li><a href="#" target="_blank">UpWork</a></li>
      <li><a href="#" target="_blank">LinkedIn</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to My Resume App',
      bio: {
        name: "Matthew Breitling",
        role: "Front End Web Developer",
        welcomeMessage: "Welcome to my Bio page, please contact me if you want more information",
        bioPic: "../assets/Profile_Pic.jpg",
        test: "",
        skills: ["HTML & HTML5", "CSS & CSS3", 
          "Javascript", "JQuery ", "Knockout JS", "React JS (This site is made with React)"
        ],
        contacts: [
          ["Mobile", "903-588-4139"],
          ["Email", "Mbreitling95@gmail.com"],
          ["Github", "Mbreitling95"],
          ["StackOverflow", "Mbreitling95"],
          ["Location", "Winnsboro TX"]
        ],
        Objects: [
          {Mobile: "903-588-4139"},
          {Email: "Mbreitling95@gmail.com"},
          {Github: "Mbreitling95"},
          {StackOverflow: "Mbreitling95"},
          {Location: "Winnsboro TX"},
        ],
        ObjContacts: {
          Mobile: "903-588-4139",
          Email: "Mbreitling95@gmail.com",
          Github: "Mbreitling95",
          StackOverflow: "Mbreitling95",
          Location: "Winnsboro TX",
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
