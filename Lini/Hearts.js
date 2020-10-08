var React = require('react');

var PropTypes = require('prop-types');

function LiniHearts({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniHearts';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 19c-0.276 0-0.5-0.224-0.5-0.5 0-2.179-2.003-3.569-4.124-5.040-1.162-0.806-2.363-1.639-3.278-2.641-1.075-1.177-1.598-2.426-1.598-3.819 0-2.757 2.243-5 5-5 1.977 0 3.689 1.153 4.5 2.821 0.811-1.669 2.523-2.821 4.5-2.821 1.337 0 2.592 0.518 3.535 1.459 0.945 0.943 1.465 2.2 1.465 3.541 0 1.392-0.523 2.641-1.598 3.819-0.915 1.002-2.116 1.836-3.278 2.641-2.121 1.472-4.124 2.861-4.124 5.040 0 0.276-0.224 0.5-0.5 0.5zM5 3c-2.206 0-4 1.794-4 4 0 2.554 2.159 4.052 4.446 5.638 1.607 1.115 3.253 2.257 4.054 3.811 0.802-1.555 2.448-2.697 4.054-3.811 2.286-1.586 4.446-3.084 4.446-5.638 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-2.206-1.794-4-4-4z",
    fill: color
  })));
}

LiniHearts.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniHearts;