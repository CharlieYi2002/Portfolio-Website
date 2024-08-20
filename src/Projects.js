import React, {useEffect } from "react";
import "./styles.css";

export default function Projects() {
    useEffect(() => {
        document.title = "Projects";
      }, []);
    return (
      <div className = 'text'>

        <h2>BoardGame Buddies</h2>

        <p>
            BoardGame Buddies was my final project in my Advanced Front-End Web Development course. The course itself was taught 
            exclusively in Reactjs. Our project guideline was very broad and the professor wanted us to create something that was 
            interesting to us, so I created a boardgame application since my roommates and I were avid boardgame players.
        </p>

        <p>
            The home page references a slideshow created using 'react-slideshow-image'. Using the NAV bar, the users can route to various
            pages such as 'Games'. This page features various boardgames, each with a link to their respective Amazon site. At the bottom of the
            page, the user can also recommend games using the recommendation form. The information submitted is stored locally using node.js.
        </p>

        <p>
            The page 'Log Game' is a feature that allows the user to log their games and see statistics. The information in this is also stored
            locally via node.js. After submitting entries, the user can press the 'See Statistics' button to view each persons winning percentages
            per game and the person who won most in each game.
        </p>

        <p>
            This site is not hosted but the code can be viewed on my Github, which can be accessed in the top left corner of this page.
        </p>

        <div className="video-container">
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mBaAVXeocKc"
            title="BoardGame Buddies Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
      </div>

      <h2>Trojan Scheduler</h2>

      <p>
        Trojan Scheduler was a project I completed along with two of my peers Peter Liu & Porter Moody for our Database Management Course. The premise of the
        project was to design a web application that incorporated two different NoSQL databases. We decided to create a project to help other Data Science and Economics
        majors with their course web registration. Using Neo4j (a graph database), Liu designed a graph of the courseplan someone of our major would take. Connecting each
        node were relationships called "prerequisite". Once the relationship is created, the user has the ability to choose classes based on the prerequisites they have taken.
        The prerequisite relationships can be added by the user when they enter the course ID for classes they have taken before.
      </p>

      <p>
        Moody designed a Dynamo Database which contained more specific information about the courses offered such as Professor name, class days/times, and class location.
        After the user adds prerequisites to the Neo4j Database, we map the course ID to the corresponding row in the DynamoDB and the content in that database is shown for the user
        to choose classes and that information is shown in the user coursebin.
      </p>

      <p>
        I was in charge of developing the front-end which I wrote primarily in Reactjs. In addition to the front-end, I also wrote a lot of the Javascript logic by accessing
        the information from the Neo4j database and mapping it to the corresponding field in the DynamoDB database.
      </p>

      <p>
        This site is also not hosted but can be found in my Github at the top left corner along with a more detailed report on the site. 
      </p>
        
        
      </div>
    );
  }
  