import { useNavigate } from 'react-router-dom';
import Button from './Button';
import classes from './ButtonsPublicationDetails.module.css';

const ButtonsPublicationDetails = ({ href, text }) => {
  const navigate = useNavigate();
  const pageBackHandler = () => navigate('/veroeffentlichungen');

  return (
    <div className={classes['buttons-box']}>
      <Button onClick={pageBackHandler} ariaLabel='back'>
        Zurück
      </Button>
      <a href={href} target='_blank' rel='noreferrer'>
        <Button ariaLabel='download'>{text}</Button>
      </a>
    </div>
  );
};

export default ButtonsPublicationDetails;
