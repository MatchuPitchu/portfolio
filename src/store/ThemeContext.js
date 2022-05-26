import { useState, createContext, useContext } from 'react';

export const ThemeContext = createContext({
  isLight: true,
  handleTheme: () => {},
});

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeContext must be used within ThemeContextProvider');
  return context;
};

const ThemeContextProvider = ({ children }) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isLight, setIsLight] = useState(prefersDark ? false : true);
  // const [isThemeChecked, setIsThemeChecked] = useState(false);

  const handleTheme = () => setIsLight((prev) => !prev);

  // theme comes of media query and is not saved in localStorage
  // useEffect(() => {
  //   // get stored date when app is opened
  //   const data = localStorage.getItem('light-mode');
  //   if (data) setIsLight(JSON.parse(data));
  //   setIsThemeChecked(true);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('light-mode', JSON.stringify(isLight));
  // }, [isLight]);

  return (
    <ThemeContext.Provider
      value={{
        isLight,
        handleTheme,
        // isThemeChecked,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
