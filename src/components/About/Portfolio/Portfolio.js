import Container from '../../Layout/Container';
import H2Title from '../../UI/Titles/H2Title';
import PortfolioIceCreamApp from './PortfolioIceCreamApp';
import PortfolioPlattformN from './PortfolioPlattformN';
import classes from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <Container className={classes['container--portfolio']}>
      <H2Title className={classes['h2--customized']}>Portfolio</H2Title>
      <div className={classes['portfolio']}>
        <PortfolioIceCreamApp />
        <PortfolioPlattformN />
      </div>
    </Container>
  );
};

export default Portfolio;
