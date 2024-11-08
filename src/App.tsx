import React from "react";
import logo from "./logo.svg";
import "./input.css";

/* I am 
Plan is to create a portfolio in different themes
first cyberpunk, then western, other would be space, etc
Make a storybook for components and showing the theme
high */
function App() {
  return (
    <div className='App h-screen bg-cyberpunk-neon-black font-orbitron'>
      <div className='intro h-full flex flex-col justify-center items-center'>
        <h1 className='header mb-12 text-cyberpunk-neon-yellow neon-purple-shadow text-7xl'>
          Eduardo Franco
        </h1>
        <h2 className='subheader mb-12 text-cyberpunk-neon-cyan neon-cyan-shadow text-xl'>
          <div className='tag'>Front End Developer | Williams-Sonoma</div>
          <div>Design Systems * UX/UI * History Trivia</div>
        </h2>
        <div className='top text-cyberpunk-neon-green neon-green-shadow text-lg'>
          Front End Developer specializing in UX/UI and Design Systems
        </div>
        <div className='links my-12 text-cyberpunk-white'>
          <button className='border border-cyberpunk-neon-white text-cyberpunk-neon-white mr-4 p-2 rounded'>
            Portfolio
          </button>
          <button className='bg-cyberpunk-neon-pink shadow-cyberpunk-neon-pink shadow-md p-2 rounded'>
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
