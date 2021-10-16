import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={classes.navbar}>
      <div>LOGO</div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <a href='/'>meine arbeit</a>
          </li>
          <li>
            <a href='/'>kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
