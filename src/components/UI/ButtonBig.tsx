import 'animate.css';
import classes from './ButtonBig.module.scss';
//TODO
const ButtonBig = props => {
  return (
    <button
      type={props.type ? props.type : ''}
      key={Math.random()}
      className={`${classes['button-big']}
    ${props.isAbsolute && props.isAbsolute.isAbsolute ? classes.absolute : ''}

     card--glass ${props.isGreyedOut === true ? classes['greyed-out'] : ''}`}
      style={props.style}
      onClick={props.onClick}
    >
      {props.type !== 'submit' ? (
        <a
          className={classes['button-text']}
          href={`#${props.moveTo ? props.moveTo : ''}`}
          // href={props.moveTo ? `#${props.moveTo}` : ''}
        >
          {props.text}
        </a>
      ) : (
        <p className={classes['button-text']}>{props.text}</p>
      )}
    </button>
  );
};

export default ButtonBig;
