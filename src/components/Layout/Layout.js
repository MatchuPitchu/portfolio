import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return <div className={classes.layout}>{children}</div>;
};

export default Layout;
