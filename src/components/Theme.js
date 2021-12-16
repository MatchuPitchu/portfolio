import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';

const Theme = ({ children }) => {
  const { isLight } = useContext(ThemeContext);

  return <div className={isLight ? '' : 'dark'}>{children}</div>;
};

export default Theme;
