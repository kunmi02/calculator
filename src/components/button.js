import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, clickHandler, color, wide,
  } = props;

  const styles = {
    width: wide,
    background: color,
    height: '100%',
    font: "3rem 'Syne Mono'",
    textAlign: 'center',
  };

  const handleClick = (e) => {
    e.preventDefault();
    clickHandler(e.target.innerText);
  };

  return (
    <button type="button" style={styles} onClick={handleClick}>{ name }</button>
  );
};

Button.defaultProps = {
  color: 'orange',
  wide: '25%',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
