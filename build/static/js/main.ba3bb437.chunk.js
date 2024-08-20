(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){},,,,function(e,a,t){e.exports=t.p+"static/media/Git_Logo.3daf6cd1.svg"},function(e,a,t){e.exports=t.p+"static/media/LinkedIn_Logo.bdc1b248.svg"},function(e,a,t){e.exports=t.p+"static/media/Profile_Logo.12a26489.svg"},function(e,a,t){e.exports=t.p+"static/media/resume.093ec4a9.pdf"},function(e,a,t){e.exports=t.p+"static/media/profile_pic.c415bae7.JPG"},function(e,a,t){e.exports=t.p+"static/media/volleyball.dcf9cd2c.jpg"},function(e,a,t){e.exports=t(22)},,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(7),s=t(3),c=t(1),i=(t(4),t(8)),l=t.n(i),m=t(9),d=t.n(m),u=t(10),h=t.n(u),p=t(11),f=t.n(p);function g(){return o.a.createElement("div",{className:"NAV"},o.a.createElement("div",{className:"left-group"},o.a.createElement("div",{className:"NAV-Component"},o.a.createElement("div",{className:"card"},o.a.createElement(s.a,{to:"https://www.linkedin.com/in/charlie-yi-2002/",target:"_blank"},o.a.createElement("img",{src:d.a,alt:"LinkedIn"})))),o.a.createElement("div",{className:"NAV-Component"},o.a.createElement("div",{className:"card"},o.a.createElement(s.a,{to:"https://github.com/CharlieYi2002",target:"_blank"},o.a.createElement("img",{src:l.a,alt:"Github Logo"})))),o.a.createElement("div",{className:"NAV-Component"},o.a.createElement("div",{className:"card"},o.a.createElement(s.a,{to:f.a,target:"_blank"},o.a.createElement("img",{src:h.a,alt:"Resume"}))))),o.a.createElement("div",{className:"middle-group"},o.a.createElement("div",{className:"NAV-Component"},o.a.createElement("h1",null,"Charlie Yi"))),o.a.createElement("div",{className:"right-group"},o.a.createElement("div",{className:"NAV-Component"},o.a.createElement("div",{className:"card"},o.a.createElement(s.a,{to:"/"},"Home"))),o.a.createElement("div",{className:"NAV-Component"},o.a.createElement("div",{className:"card"},o.a.createElement(s.a,{to:"/About"},"About"))),o.a.createElement("div",{className:"NAV-Component"},o.a.createElement("div",{className:"card"},o.a.createElement(s.a,{to:"/Projects"},"Projects")))))}function b(){return Object(n.useEffect)(()=>{document.title="Home"},[]),o.a.createElement("div",{className:"text"},o.a.createElement("h2",null,"Welcome to Charlie Yi's Website!"))}var E=t(12),v=t.n(E),w=t(13),y=t.n(w);function N(){return Object(n.useEffect)(()=>{document.title="About Me"},[]),o.a.createElement("div",{className:"AboutMe"},o.a.createElement("div",{className:"text"},o.a.createElement("h2",null,"About Me"),o.a.createElement("img",{src:v.a,alt:"Resume",className:"float-right"}),o.a.createElement("p",null,"I was born and raised in Cupertino, CA. I'm currently a senior at University of Southern California pursuing a double major in Data Science and Economics. Throughout my coursework for my Data Science degree, I took various front-end development courses such as Full-Stack Web Development, Advanced Front-end Web Development, Design for UI/UX, and Design for Data Visualization. These courses paired with the various database courses fostered a passion for full-stack web development."),o.a.createElement("p",null,"Outside of academics I spend a lot of his time being active. I've been playing volleyball since I was 12 years old and have played on USC Men's Club Volleyball team for my entire duration at USC. Beyond volleyball, I also enjoys working out, hiking, and skiing/snowboarding."),o.a.createElement("img",{src:y.a,alt:"volleyball",className:"float-left"})))}function j(){return Object(n.useEffect)(()=>{document.title="Projects"},[]),o.a.createElement("div",{className:"text"},o.a.createElement("h2",null,"BoardGame Buddies"),o.a.createElement("p",null,"BoardGame Buddies was my final project in my Advanced Front-End Web Development course. The course itself was taught exclusively in Reactjs. Our project guideline was very broad and the professor wanted us to create something that was interesting to us, so I created a boardgame application since my roommates are avid boardgame players."),o.a.createElement("p",null,"The home page references a slideshow created using 'react-slideshow-image'. Using the NAV bar, the users can route to various pages such as 'Games'. This page features various boardgames, each with a link to their respective Amazon site. At the bottom of the page, the user can also recommend games using the recommendation form. The information submitted is stored locally using node.js."),o.a.createElement("p",null,"The page 'Log Game' is a feature that allows the user to log their games and see statistics. The information in this is also stored locally via node.js. After submitting entries, the user can press the 'See Statistics' button to view each persons winning percentages per game and the person who won most in each game."),o.a.createElement("p",null,"This site is not hosted but the code can be viewed on my Github, which can be accessed in the top left corner of this page."),o.a.createElement("div",{className:"video-container"},o.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/mBaAVXeocKc",title:"BoardGame Buddies Video",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),o.a.createElement("h2",null,"Trojan Scheduler"),o.a.createElement("p",null,'Trojan Scheduler was a project I completed along with two of my peers Peter Liu & Porter Moody for our Database Management Course. The premise of the project was to design a web application that incorporated two different NoSQL databases. We decided to create a project to help other Data Science and Economics majors with their course web registration. Using Neo4j (a graph database), Liu created a graph of the courseplan someone of our major would take. Connecting each node were relationships called "prerequisite". Once the relationship is created, the user has the ability to choose classes based on the prerequisites they have taken. The prerequisite relationships can be added by the user when they enter the course ID for classes they have taken before.'),o.a.createElement("p",null,"Porter created a Dynamo Database which contained more specific information about the courses offered such as Professor name, class days/times, and class location. After the user adds prerequisites to the Neo4j Database, we map the course ID to the corresponding row in the DynamoDB and the content in that database is shown for the user to choose classes and that information is shown in the user coursebin."),o.a.createElement("p",null,"I was in charge of developing the front-end which I wrote primarily in Reactjs."))}function A(){return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,null,o.a.createElement(g,null),o.a.createElement(c.c,null,o.a.createElement(c.a,{index:!0,element:o.a.createElement(b,null)}),o.a.createElement(c.a,{path:"/About",element:o.a.createElement(N,null)}),o.a.createElement(c.a,{path:"/Projects",element:o.a.createElement(j,null)}))))}const k=document.getElementById("root");Object(r.createRoot)(k).render(o.a.createElement(n.StrictMode,null,o.a.createElement(A,null)))}],[[14,1,2]]]);
//# sourceMappingURL=main.ba3bb437.chunk.js.map