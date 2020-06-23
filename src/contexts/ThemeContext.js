import React, { createContext, useState, useEffect } from 'react';


export const ThemeContext = createContext();


const ThemeProvider = (props) => {

  // Checks local storage for dark theme, sets as false by default
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const localData = localStorage.getItem("theme");
    return localData ? JSON.parse(localData) : false;
  });


  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  // Saves theme to local storage whenever updated
  const setLocalStorage = (item, value) => {
    localStorage.setItem(item, JSON.stringify(value));
  }

  // Local storage updated whenever isDarkTheme is
  useEffect(() => {
    setLocalStorage("theme", isDarkTheme)
  }, [isDarkTheme]);


  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;