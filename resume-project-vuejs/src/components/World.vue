
<template>
  <div class="world">
    
    
    <div id="header" class="center-content clear-fix">
      <span>
        <h1 id="name">{{ bio.name }}</h1>
        <h2  class="white-text inline-block">| {{ bio.role }}</h2><hr/>
      </span>
      <ul id="topContacts" class="flex-box">
        <template v-for="contact in bio.contacts"> 
              <li class="flex-item">
              <span class="theme-text">{{ contact[0] }} :</span>
              <span class="white-text">{{ contact[1] }}</span>
              </li>
          </template> 
      </ul>
      <div>
        <span class="welcome-message">{{ bio.welcomeMessage }}</span>
        <img src="../assets/Profile_Pic.jpg" alt="My Face" class="biopic" />
        <h3  class="theme-text">Skills at a Glance:</h3>
        
        <ul  id="skills" class="flex-column">
           <template v-for="skill in bio.skills"> 
              <li class="flex-item">
                <span class="white-text">{{ skill }}</span>
                <hr/>
              </li>
          </template>
        </ul>
      </div>  
    </div>


    <div id="WorkSection" class="grey">
      <h2>Work Experience</h2>
      <template v-for="job in Jobs" >
        <div class="work-entry">
          <div>{{ job.title }} at 
            <span class="theme-text" >
            {{ job.employer }}</span> 
            as a {{ job.position }}
            <span class="location-text">
                <div>{{ job.location }}</div>
                <div>{{ job.dates }}</div>
            </span>
          </div>
          <div  class="flex-column work-desc" >{{ job.description }}</div>
        </div>
      </template>
    </div>
    <div id="ProjectSection2">
      <h2>Projects</h2>
      <template v-for="project in Projects">
        <div class="project-entry">
          <div class="theme-text project-title ">{{ project.title }}:</div>
          <div class="project-padding">
            Employer: <span class="theme-text">{{ project.employer }}</span>
            <span class="location-text">
              <div>{{ project.location }}</div>
              <div>{{ project.dates }}</div>
            </span>
            <div>Role: <span class="theme-text">{{ project.position }}</span></div>
            <div> Project: {{ project.description }}</div>
          </div>
          <br/><img src="../assets/Responsive-SPA-Cropped2.png" alt="Screenshot of Project" class="project-img" /><hr/>
        </div>
      </template>
    </div>

  <div id="CourseSection" class="grey">
    <h2>Online Classes</h2>
    <template v-for="course in onlineCourses">
      <div class="work-entry">
        <div>{{ course.title }}: at  <a :href="course.url" > {{ course.school }}</a></div>
        <div class="location-text" >{{ course.dates }}</div>
      </div>
    </template>
  </div>

    




  </div>
</template>

<script>

/*new Vue.component('skill-item', {
  template: `
    li class="flex-item">
      <span class="white-text">{{ text }}</span>
      <hr/>
    </li>`,
  props: ['text']
})*/



export default {
  name: "world",
  data () {
    return {
      msg: "Test",
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
        ]
      },
      Jobs: [
        {
        employer: "Breitling Consulting",
        title: "Front End Web Developer",
        position: "Subcontracter",
        location: "Remote from Winnsboro, Texas",
        dates: "January 2013 to April 2017",
        description: "Breitling Consulting is a Contracting Company that provides Full stack Web Development for Clients. \
                  My responsibilities at Breitling Consulting included Web Development of internal edit forms and the associated front end; HTML, CSS, JS/JQuery, and the TransactSQL Procs used to connect SQLServer tables to the custom JS legacy framework and then the form."
        }
      ],
      Projects: [
        {
          employer: "Breitling Consulting",
          title: "Responsive Login/Signup SPA",
          position: "Front End Developer",
          location: "Remote from Winnsboro, Texas",
          dates: "During March 2017",
          description: "Redesign and Development of new Responsive SPA for Client's Vendor Login/Signup site.",
        } 
      ],
      onlineCourses: [
        {
          title: "Responsive Web Design Fundamentals",
          school: "Udacity",
          dates: "03/14/17-03/20/17",
          url: "https://www.udacity.com/courses/ud893/"
        }, 
        {
          title: "JavaScript Basics",
          school: "Udacity",
          dates: "03/21/17-04/05/17",
          url: "https://www.udacity.com/courses/ud804/"
        },
        {
          title: "Intro to HTML and CSS",
          school: "Udacity",
          dates: "Completed June 2017",
          url: "https://www.udacity.com/courses/ud304/"
        },
        {
          title: "Intro to JQuery",
          school: "Udacity",
          dates: "Completed June 2017",
          url: "https://www.udacity.com/courses/ud245/"
        },
        {
          title: "Intro to JavaScript",
          school: "Udacity",
          dates: "Completed June 2017",
          url: "https://www.udacity.com/courses/ud803/"
        },
        {
          title: "Object-Oriented JavaScript (by Hack Reactor)",
          school: "Udacity",
          dates: "Completed June 2017",
          url: "https://www.udacity.com/courses/ud015/"
        },
        {
          title: "HTML5 Canvas",
          school: "Udacity",
          dates: "Completed June 2017",
          url: "https://www.udacity.com/courses/ud292/"
        },
        {
          title: "ES6 - JavaScript Improved",
          school: "Udacity",
          dates: "Completed July 2017",
          url: "https://www.udacity.com/courses/ud356/"
        },
        {
          title: "JavaScript Design Patterns",
          school: "Udacity",
          dates: "Completed July 2017",
          url: "https://www.udacity.com/courses/ud989/"
        },
      ]
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body,
div,
ul,
li,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
}

.clear-fix {
    overflow: auto;
}

.education-entry,
.work-entry,
.project-entry {
    padding: 0 5%;
    padding-bottom: 15px;
}

h1 {
    font-size: 40px;
    color: #2F7FE9;
    line-height: 48px;
    display: inline;
}

h2 {
    font-weight: bold;
    font-size: 24px;
    color: #999;
    line-height: 29px;
    padding: 10px;
}

h3 {
    font-style: italic;
    font-size: 20px;
    color: #000;
    line-height: 22px;
}

h4 {
    font-weight: bold;
    font-size: 14px;
    color: #4a4a4a;
    line-height: 17px;
}

h2,
h3,
h4,
h5 {
    padding: 10px 5%;
}

.date-text {
    font-style: italic;
    font-size: 14px;
    color: #999;
    line-height: 16px;
    float: left;
    padding-top: 3px;
    left: 225px;
}

.location-text {
    font-style: italic;
    font-size: 14px;
    color: #999;
    line-height: 16px;
    float: right;
}

p {
    font-size: 14px;
    color: #333;
    line-height: 21px;
}

a {
    color: #1199c3;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
}



.welcome-message {
    font-style: italic;
    font-size: 18px;
    color: #f3f3f3;
    line-height: 28px;
}

.project-title {
    text-align: center;
    font-size: 20px;
    color: #3F3F3F;
    line-height: 38px;
}

.project-desc {
    margin-left: 30%;
    margin-right: auto;
    text-align: left;
}

.project-img {
    border: 2px solid black;
    border-radius: 5px;
}

.project-padding div {
    margin-top: 15px;
}

#skills-h3 {
    color: #f5ae23;
    display: none;
}

.inline-block {
    display: inline-block;
}

.theme-bg {
    background-color: #2F7FE9;
}

.theme-text {
    color: #2F7FE9;
}

.orange-bg {
    background-color: #f5ae23;
}

.orange-text {
    color: #f5ae23;
}

.white-text {
    font-weight: bold;
    color: #fff;
}

.light-orange {
    /*background:rgba(255,150,0,0.3);*/
    background-color: #FBC29C;
    padding-bottom: 10px;
    clear: both;
}

.light-blue {
    background-color: #D3F5F7;
    padding-bottom: 10px;
    clear: both;
}

.grey {
    background-color: #EDEDED;
    padding-bottom: 10px;
    clear: both;
}

.dark-gray {
    background-color: #4a4a4a;
}


/* TODO: Replace with image later */

#header {
    background-color: #484848;
}

.flex-box {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
}

.flex-column {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 10px;
}

.center-content {
    padding: 2.5% 5%;
}

ul {
    list-style-type: none;
}

.biopic {
    float: left;
    padding: 10px;
    width: 200px;
    display: none;
}

img {
    padding: 10px;
}

span {
    padding: 5px;
}

#lets-connect {
    text-align: center;
}
.work-desc {
  overflow:auto;
  width:50%;
  
}



/* Media queries to handle various device widths */

@media only screen and (max-width: 1024px) {
    #lets-connect {
        margin-top: 5%;
    }
}

@media only screen and (max-width:900px) {
    .biopic {
        width: 175px;
    }
}

@media only screen and (max-width: 750px) {
    #lets-connect {
        margin-top: 10%;
    }
    .biopic {
        width: 150px;
    }
    .welcome-message {
        display: none;
    }
}

#map {
    display: block;
    height: 100%;
    margin: 0 5%;
}

#mapDiv {
    height: 400px;
    width: 100%;
    padding-bottom: 5%;
}

@media only screen and (min-width: 750px) {
    #skills-h3,
    .biopic {
        display: block;
    }
}


/*h1, h2 {
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
}*/
</style>
