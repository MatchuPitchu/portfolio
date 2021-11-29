import classes from './Quote.module.css';

const Quote = ({ quotes, className }) => {
  console.log(quotes);

  return (
    <div>
      <input
        // id='card-one'
        className={`${classes.hidden} ${classes['card-one']}`}
        type='radio'
        name='ok-button'
        checked
      />
      <input
        id='card-two'
        className={`${classes.hidden} ${classes['card-two']}`}
        type='radio'
        name='ok-button'
      />
      <input
        id='card-three'
        className={`${classes.hidden} ${classes['card-three']}`}
        type='radio'
        name='ok-button'
      />

      <div className={classes.container}>
        <div className={`${classes.inner} ${classes['inner-one']}`}>
          <div className={classes.box}>
            <div className={classes.text}>
              {/* <i className={classes.start-quote fas fa-quote-left'></i> */}
              <p className={classes.quote}>
                Develop a passion for learning. If you do, you will never cease to grow.
              </p>
              <p className={classes.credit}>{quotes.author}</p>
            </div>
            <label className={classes.button} for='card-two'>
              <p>next</p>
            </label>
          </div>
        </div>

        <div className={`${classes.inner} ${classes['inner-two']}`}>
          <div className={classes.box}>
            <p className={classes.number}>2</p>
            {/* <i className='start-quote fas fa-quote-left'></i> */}
            <p className={classes.quote}>An investment in knowledge pays the best interest.</p>
            <p className={classes.credit}>Benjamin Franklin</p>
            <label className={classes.button} for='card-three'>
              <p>next</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
