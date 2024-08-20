import React, {useEffect } from "react";
import "./styles.css";
// import Typewriter from "./Typewriter";



export default function Home() {
    useEffect(() => {
        document.title = "Home";
      }, []);
    return (
        <div className = 'text'>
            <h5>Charlie Yi—Web Developer</h5>
            <h3>
              I'm Charlie Yi, a USC student with a passion for full-stack engineering and more specifically, in website development.
            </h3>

           
        </div>
    );
  }
  