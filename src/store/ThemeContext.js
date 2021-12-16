import { useState, createContext } from 'react';

export const ThemeContext = createContext({
  isLight: true,
  handleStyleMode: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  const handleStyleMode = () => setIsLight((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{
        isLight,
        handleStyleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
