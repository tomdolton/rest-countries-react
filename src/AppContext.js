import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState();
  return (
    <AppContext.Provider value={}>
      {props.children}
    </AppContext.Provider>
  );
}

export default ThemeProvider;