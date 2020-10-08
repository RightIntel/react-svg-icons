var React = require('react');

var PropTypes = require('prop-types');

function LiniPants({
  size,
  ...props
}) {
  var className = 'Component Lini LiniPants';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.993 18.418l-3-18c-0.040-0.241-0.249-0.418-0.493-0.418h-12c-0.244 0-0.453 0.177-0.493 0.418l-3 18c-0.044 0.266 0.131 0.52 0.395 0.572l5 1c0.252 0.050 0.501-0.098 0.576-0.343l3.522-11.447 3.522 11.447c0.066 0.213 0.262 0.353 0.477 0.353 0.032 0 0.065-0.003 0.098-0.010l5-1c0.265-0.053 0.44-0.306 0.395-0.573zM15.741 4.988c-0.080 0.008-0.16 0.012-0.241 0.012-1.207 0-2.217-0.86-2.45-2h2.359l0.331 1.988zM15.243 2h-4.243v-1h4.076l0.167 1zM9 2v-1h1v1h-1zM8 1v1h-4.243l0.167-1h4.076zM3.59 3h2.359c-0.232 1.14-1.242 2-2.45 2-0.081 0-0.161-0.004-0.241-0.012l0.331-1.988zM13.845 18.921l-3.867-12.568c-0.065-0.21-0.258-0.353-0.478-0.353s-0.413 0.143-0.478 0.353l-3.867 12.568-4.082-0.816 2.021-12.128c0.134 0.016 0.27 0.024 0.406 0.024 1.76 0 3.221-1.306 3.464-3h5.072c0.243 1.694 1.704 3 3.464 3 0.136 0 0.271-0.008 0.406-0.024l2.021 12.128-4.082 0.816z"
  })));
}

LiniPants.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPants;