import { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext({
  isLight: true,
  handleStyleMode: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const [isLocalStorageChecked, setIsLocalStorageChecked] = useState(false);

  const handleStyleMode = () => setIsLight((prev) => !prev);

  useEffect(() => {
    // get stored date when app is opened
    const data = localStorage.getItem('light-mode');
    if (data) setIsLight(JSON.parse(data));
    setIsLocalStorageChecked(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('light-mode', JSON.stringify(isLight));
  }, [isLight]);

  return (
    <ThemeContext.Provider
      value={{
        isLight,
        handleStyleMode,
        isLocalStorageChecked,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
