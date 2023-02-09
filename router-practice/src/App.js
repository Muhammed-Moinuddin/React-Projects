import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Book } from "./components/Book";
import { Home } from "./components/Home";
import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { NewBook } from "./components/NewBook";
import { Contact } from "./components/Contact";

export const ThemeContext = React.createContext();
function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
  return (
    <>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/book">Book</Link></li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/book">Book</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/book" element={<Book/>}/>
      </Routes> */}
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Home/>
      </ThemeContext.Provider>
      <Contact/>
    </>
  );
}

export default App;
