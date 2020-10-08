var React = require('react');

var PropTypes = require('prop-types');

function LiniArrowReturn({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniArrowReturn';

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
    d: "M18.5 5c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5h-15.293l4.146-4.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5 5c-0.195 0.195-0.195 0.512 0 0.707l5 5c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-4.146-4.146h15.293c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.276-0.224-0.5-0.5-0.5z",
    fill: color
  })));
}

LiniArrowReturn.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArrowReturn;