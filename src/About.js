import React, {useEffect } from "react";
import "./styles.css";
import ProfilePic from "./imgs/profile_pic.JPG";
import Volleyball from "./imgs/volleyball.jpg";

export default function About() {
    useEffect(() => {
        document.title = "About Me";
      }, []);
    return (
      <div className = 'AboutMe'>
        <div className = 'text'>
        <h2>About Me</h2>
          <img src={ProfilePic} alt="Resume" className = 'float-right'/>
          
          <p>
            I was born and raised in Cupertino, CA and spent my entire life there until college where I moved to Los Angeles, CA to attend USC. My experience
            in The Bay shaped much of my personality and passions, including my academic interests as well as personal hobbies.
          </p>
          <p>
            In my free time, I spend a lot of his time being active. I've been playing volleyball since I was 12 years old and have 
            played on USC Men's Club Volleyball team for my entire duration at USC. In high school, I coached volleyball at a local clinic for all 4 years
            and then coached the Women's JV and Men's Varsity team at Saratoga HS during my freshman year of college. Beyond volleyball, I also 
            enjoy working out, hiking, and skiing/snowboarding. Most recently, I've gotten into pickle ball!

          </p>
          <img src={Volleyball} alt="volleyball" className = 'float-left'/>


          <h2>Academic Background</h2>

          <p>
            I first started coding in 8th grade where I went to an after school class to learn Java. It was there that I developed my initial passion for computer science.
            My freshman year of high school, I continued taking that class but took Java at my highschool on top of it—eventually taking AP Computer Science my sophomore year
            of highschool.
          </p>

          <p>
          At USC, I pursued a double major in Data Science & Economics. As part of my Data Science electives, I was able to take various courses about Web Development such as Intro
          to Full-Stack, Advanced Front-end Web Development, and Design for UI/UX. These classes helped me discover my passion for full-stack engineering and helped me develop my own
          skills in front-end. I am passionate for website development specifically because of the design and creative aspect in it. I love getting to work on a project, either designed
          by myself or by an actual designer, and getting to see the progression from start to finish. 
          </p>


        </div>
        
        
      </div>
    );
  }
  