var React = require('react');

var PropTypes = require('prop-types');

function LiniArrowWave({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniArrowWave';

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
    d: "M18.854 13.646c-0.195-0.195-0.512-0.195-0.707 0l-2.146 2.146v-9.293c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v8c0 1.378-1.122 2.5-2.5 2.5s-2.5-1.122-2.5-2.5v-9.293l2.146 2.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-3-3c-0.195-0.195-0.512-0.195-0.707 0l-3 3c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l2.146-2.146v9.293c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-8c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5v9.293l-2.146-2.147c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l3 3c0.098 0.098 0.226 0.147 0.354 0.147s0.256-0.049 0.354-0.147l3-3c0.195-0.195 0.195-0.512 0-0.707z",
    fill: color
  })));
}

LiniArrowWave.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArrowWave;