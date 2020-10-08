var React = require('react');

var PropTypes = require('prop-types');

function LiniSyringe({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniSyringe';

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
    d: "M18.854 5.646l-0.5-0.5c-0-0-0-0-0-0l-4-4c-0-0-0-0-0-0l-0.5-0.5c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l0.146 0.146-2.293 2.293-0.146-0.146c-0-0-0-0-0-0l-1.5-1.5c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1.146 1.146-7.646 7.646c-0.118 0.118-0.169 0.288-0.137 0.452 0.019 0.097 0.44 2.157 1.314 3.371l-2.677 2.677c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2.677-2.677c1.215 0.874 3.274 1.295 3.371 1.314 0.033 0.007 0.065 0.010 0.098 0.010 0.131 0 0.259-0.052 0.354-0.146l7.647-7.646 1.646 1.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-2-2c-0-0-0-0-0-0l-0.146-0.146 2.293-2.293 0.146 0.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707zM7.34 16.453c-0.793-0.187-2.335-0.655-2.986-1.307-0.65-0.65-1.118-2.193-1.306-2.987l7.453-7.453 4.293 4.293-7.453 7.453zM15 7.793l-3.293-3.293 2.293-2.293 3.293 3.293-2.293 2.293z",
    fill: color
  })));
}

LiniSyringe.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSyringe;